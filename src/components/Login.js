import React from 'react';
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

import useForm from "./useForm";
import validate from "./validateInfo";

const Login = () => {
const formData = {
    email: "",
    password: "",
}

    const {handleChange, values, handleSubmit, errors} = useForm(validate, formData);

    return (
        <div className="login">
            <h2 className="title">Zaloguj się</h2>
            <div className="decoration"><img alt="decoration" src={decoration}/></div>
            <form onSubmit={(e) => {
                handleSubmit(e)
            }} id="login_form">
                <div className="login__inputs">
                    <div className="login__item">
                        <label className="login__label" htmlFor="email">Email</label>
                        <input className="login__input"
                               id="email"
                               name="email"
                               type="text"
                               value={values.email}
                               onChange={(e) => handleChange(e)}/>
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>
                    <div className="login__item">
                        <label className="login__label" htmlFor="password">Hasło</label>
                        <input className="login__input"
                               id="password"
                               name="password"
                               type="password"
                               value={values.password}
                               onChange={(e) => handleChange(e)}/>
                        {errors.password && <div className="error">{errors.password}</div>}
                    </div>
                </div>
            </form>
            <div className="login__buttonsContainer">
                <Link to={"/rejestracja"} className="button button--noBorder">Załóż konto</Link>
                <button type="submit" form="login_form" className="button">Zaloguj się</button>
            </div>
        </div>
    );
};

export default Login;