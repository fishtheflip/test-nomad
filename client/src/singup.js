import React from 'react';

const Singup = () => {
    return (
        <div className="main-container">
            <div className="form-group row container-sm">
                <form className="form">

                <div className="form-group">
                    <label for="exampleInputEmail1">Логин</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Придумайте логин"/>

                </div>
                    
                

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                    <label class="form-check-label" for="flexRadioDefault1">
                        Клиент
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault2">
                        Менеджер
                    </label>
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Имя</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите ваше имя"/>

                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Фамилия</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите вашу фамилию"/>

                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Отчество</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Введите ваше отчество"/>

                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Пароль</label>
                    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Придумайте пароль"/>

                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1">Пароль</label>
                    <input type="password" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Повторите пароль"/>

                </div>


                <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
                </form>
            </div>
            

              </div>
    )
}

export default Singup;