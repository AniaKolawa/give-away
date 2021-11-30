import React from 'react';
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className="login">
            <h2 className="title">Załóż konto</h2>
            <div className="decoration"><img alt="decoration" src={decoration}/></div>
            <form>
                <div className="login__inputs login__inputs--register">
                    <div className="login__item">
                        <label className="login__label" htmlFor="email">Email</label>
                        <input className="login__input"
                               id="email"
                               name="email"
                               type="text"/>
                    </div>
                    <div className="login__item">
                        <label className="login__label" htmlFor="password">Hasło</label>
                        <input className="login__input"
                               id="password"
                               name="password"
                               type="password"/>
                    </div>
                    <div className="login__item">
                        <label className="login__label" htmlFor="password2">Powtórz hasło</label>
                        <input className="login__input"
                               id="password2"
                               name="password2"
                               type="password"/>
                    </div>

                </div>
            </form>
            <div className="login__buttonsContainer">
                <Link to={"/login"} className="button button--noBorder">Zaloguj się</Link>
                <div className="button">Załóż konto</div>
            </div>


        </div>
    );
};

export default Register;