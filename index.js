const express = require('express');
const config = require('config');
const mongoose = require('mongoose');


const app = express();
const PORT = config.get('port') || 3001;


app.use('/api/auth', require('./routes/auth.routes'));


async function start(){
    try {
        await mongoose.connect(config.get('mongoURL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
start();

app.listen(PORT, ()=>{
    console.log('Start ', PORT);
});