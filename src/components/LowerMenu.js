import React from 'react';
import {Link} from "react-scroll";

const LowerMenu = () => {
    return (
        <div className="lowerNav-container">

            <Link className="lowerMenuLink" to="/">Start</Link>
            <Link className="lowerMenuLink" to="/">O co chodzi?</Link>
            <Link className="lowerMenuLink" to="/">O nas</Link>
            <Link className="lowerMenuLink" to="/">Fundacja i organizacje</Link>
            <Link className="lowerMenuLink" to="/">Kontakt</Link>

        </div>
    );
};

export default LowerMenu;