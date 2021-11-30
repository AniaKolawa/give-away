import React from 'react';
import decoration from "../assets/Decoration.svg";
import {Link} from "react-router-dom";

const Logout = () => {
    return (
        <div className="login">
            <h2 className="title">Wylogowanie nastąpiło pomyślnie!</h2>
            <div className="decoration"><img alt="decoration" src={decoration}/></div>
            <Link to={"/"} className="button">Strona główna</Link>
        </div>
    );
};

export default Logout;