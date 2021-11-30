import React from 'react';
import {NavLink} from "react-router-dom";

const UpperMenu = () => {
    return (
        <div className="upperNav-container">

            <NavLink className="upperMenuLink" to="/login">Zaloguj się</NavLink>
            <NavLink className="upperMenuLink upperMenuLink--active" to="/rejestracja">Zarejestruj się</NavLink>

        </div>
    );
};

export default UpperMenu;