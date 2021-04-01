const {Router} = require('express');
const router = Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/register', 
        [check('login', 'Uncorrect Length').isLength({ min: 5 }),
        check('password', 'Uncorrect Length').isLength({ min: 5 })],
        async (req, res)=>{
        try {
            const errors = validationResult(req);
            if(errors.isEmpty()){
                return res.status(400).json({
                    errors:errors.array(),
                    message: 'Uncorrect data Sing Up'
                });
            }
            const {login, password} = req.body;
            const candidate = await User.findOne({login:login});
            if(candidate){
                res.status(400).json({message: 'Already Exist'});
            }
            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({login, password: hashedPassword});
            await user.save();
            res.status(201).json({message: 'Created New User'})

        } catch (error) {
            res.status(500).json({message: 'Something wrong'});
        }
});

router.post('/login', 
        [check('login', 'Write correct login').isLength({ min:5 }),
        check('password', 'Write password').exists()],
        async (req, res)=>{
            try {
                const errors = validationResult(req);
                if(errors.isEmpty()){
                    return res.status(400).json({
                        errors:errors.array(),
                        message: 'Uncorrect data Log In'
                    });
                }
                const {login, password} = req.body;
                const user = await User.findOne({login});
                if(!user){
                    return res.status(400).json({message: 'User not found'});
                }
                const isMatch = await bcrypt.compare(password, user.password);
                
                if(!isMatch){
                    return res.status(400).json({message: 'Uncorrect password'});
                }
                const token = jwt.sign({userId:user.id}, config.get('jwtSecret'), {expiresIn: '1h'} );
                res.json({token, userId: user.id});

    
            } catch (error) {
                res.status(500).json({message: 'Something wrong'});
            }
});

module.exports = router;