import React from 'react';
import './index.css';
const Login = () => {
    return(
        <div className="main-container">
            <div className="form-group row container-sm">
                <form className="form">
                <div className="form-group">
                    <label for="exampleInputEmail1"> Логин</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите ваш логин"/>

                </div>
                    <div className="form-group">
                    <label for="exampleInputPassword1"> Пароль</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Введите ваш пароль"/>
                </div>
                <button type="submit" className="btn btn-primary">Войти</button>
                </form>
            </div>
        </div>
    )
};

    export default Login;