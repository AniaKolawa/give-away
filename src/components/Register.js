import React from 'react';
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";
import useForm from "./useForm";
import validate from "./validateInfo";

const Register = () => {
    const formData = {
        email: "",
        password: "",
        password2: "",
    }

    const {handleChange, values, setValues, handleSubmit, errors, setErrors} = useForm(validate, formData);


    return (
        <div className="login">
            <h2 className="title">Załóż konto</h2>
            <div className="decoration"><img alt="decoration" src={decoration}/></div>
            <form onSubmit={(e) => {
                handleSubmit(e)
                // handleFormData()
            }} id="register_form">
                <div className="login__inputs login__inputs--register">
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
                    <div className="login__item">
                        <label className="login__label" htmlFor="password2">Powtórz hasło</label>
                        <input className="login__input"
                               id="password2"
                               name="password2"
                               type="password"
                               value={values.password2}
                               onChange={(e) => handleChange(e)}/>
                        {errors.password2 && <div className="error">{errors.password2}</div>}
                    </div>

                </div>
            </form>
            <div className="login__buttonsContainer">
                <Link to={"/login"} className="button button--noBorder">Zaloguj się</Link>
                <button type="submit" form="register_form" className="button">Załóż konto</button>
            </div>


        </div>
    );
};

export default Register;