import React, {useEffect, useState} from 'react';
import decoration from "../assets/Decoration.svg";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";

import useForm from "./useForm";
import validate from "./validateInfo";

const Contact = ({name}) => {

    const [success, setSuccess] = useState(false);
    const formData = {
        name: "",
        email: "",
        message: "",}


const handleFormData = () => {
    fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            if(data.status === 'success') {
                setSuccess(true);
                setErrors({});
                setValues({
                    name: "",
                    email: "",
                    message: "",});
            }
            if(data.status === 'error') {
                setSuccess(false)
            }
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
}



    const {handleChange, values, setValues, handleSubmit, errors, setErrors} = useForm(validate, formData);

    return (
        <section id={name} className="contact">
            <div className="container">
                <div className="contact__contentContainer">
                    <h2 className="title">Skontaktuj się z nami</h2>
                    <div className="decoration"><img alt="decoration" src={decoration}/></div>
                    {success && <div className="successMsg">Wiadomość została wysłana!<br/>Wkrótce się skontaktujemy.</div> }
                    <form onSubmit={(e) => {
                        handleSubmit(e)
                        handleFormData()
                    }} id="contact_form" className="contact__form">
                        <div className="form__inputs">
                            <div className="form__item">
                                <label className="form__label" htmlFor="name">Wpisz swoje imię</label>
                                <input className="form__input"
                                       id="name"
                                       name="name"
                                       type="text"
                                       placeholder="Krzysztof"
                                       value={values.name}
                                       onChange={(e) => handleChange(e)}/>
                                {errors.name && <div className="error">{errors.name}</div>}
                            </div>
                            <div className="form__item">
                                <label className="form__label" htmlFor="email">Wpisz swój email</label>
                                <input className="form__input"
                                       id="email"
                                       name="email"
                                       type="text"
                                       placeholder="abc@xyz.pl"
                                       value={values.email}
                                       onChange={(e) => handleChange(e)}/>
                                {errors.email && <div className="error">{errors.email}</div>}
                            </div>
                        </div>

                        <div className="form__textarea-item">
                            <label className="form__label" htmlFor="message">Wpisz swoją wiadomość</label>
                            <textarea className="form__textarea"
                                      name="message"
                                      id="message"
                                      rows="4"
                                      value={values.message}
                                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                      onChange={(e) => handleChange(e)}
                            />
                            {errors.message && <div className="error">{errors.message}</div>}
                        </div>
                    </form>
                    <button className="form__button button" form="contact_form" type="submit">Wyślij</button>
                </div>
            </div>

            <footer className="footer container">
                <div className="footer__copyContainer">
                    <p className="footer__copy">Copyright by Coders Lab</p>
                </div>
                <div className="footer__iconsContainer">
                    <img alt="facebook" src={facebook}/>
                    <img alt="instagram" src={instagram}/>
                </div>
            </footer>
        </section>
    );
};

export default Contact;