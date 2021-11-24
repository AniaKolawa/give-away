import React from 'react';
import {Link} from "react-scroll";

const LowerMenu = () => {
    return (
        <div className="lowerNav-container">

            <Link className="lowerMenuLink" to="/">Start</Link>
            <Link className="lowerMenuLink" to="steps">O co chodzi?</Link>
            <Link className="lowerMenuLink" to="about">O nas</Link>
            <Link className="lowerMenuLink" to="beneficiary">Fundacja i organizacje</Link>
            <Link className="lowerMenuLink" to="contact">Kontakt</Link>

        </div>
    );
};

export default LowerMenu;