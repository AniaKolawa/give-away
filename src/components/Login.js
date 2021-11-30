import React from 'react';
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="login">
            <h2 className="title">Zaloguj się</h2>
            <div className="decoration"><img alt="decoration" src={decoration}/></div>
            <form>
                <div className="login__inputs">
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

                </div>
            </form>
            <div className="login__buttonsContainer">
                <Link to={"/rejestracja"} className="button button--noBorder">Załóż konto</Link>
                <div className="button">Zaloguj się</div>
            </div>


        </div>
    );
};

export default Login;