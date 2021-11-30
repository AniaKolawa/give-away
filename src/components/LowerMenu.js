import React from 'react';
import {Link} from "react-scroll";

const LowerMenu = () => {
    return (
        <div className="lowerNav-container">
            <Link className="lowerMenuLink lowerMenuLink--active" to="/">Start</Link>
            <Link smooth={true} className="lowerMenuLink" to="steps">O co chodzi?</Link>
            <Link smooth={true} className="lowerMenuLink" to="about">O nas</Link>
            <Link smooth={true} className="lowerMenuLink" to="beneficiary">Fundacja i organizacje</Link>
            <Link smooth={true} className="lowerMenuLink" to="contact">Kontakt</Link>
        </div>
    );
};

export default LowerMenu;