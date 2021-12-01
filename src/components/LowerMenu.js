import React, {useEffect, useState} from 'react';
import {Link as LinkScroll} from "react-scroll";
import {Link} from "react-router-dom"



const LowerMenu = () => {

const [pathname, setPathname] = useState(window.location.pathname)

    useEffect(() => {
        setPathname(window.location.pathname)
    }, [window.location.pathname])

    return (
        <div className="lowerNav-container">
            {pathname === "/" ?
                <>
                    <LinkScroll className="lowerMenuLink lowerMenuLink--active" to="/">Start</LinkScroll>
                    <LinkScroll smooth={true} className="lowerMenuLink" to="steps">O co chodzi?</LinkScroll>
                    <LinkScroll smooth={true} className="lowerMenuLink" to="about">O nas</LinkScroll>
                    <LinkScroll smooth={true} className="lowerMenuLink" to="beneficiary">Fundacja i organizacje</LinkScroll>
                    <LinkScroll smooth={true} className="lowerMenuLink" to="contact">Kontakt</LinkScroll>
                </> :
                <>
                    <Link className="lowerMenuLink lowerMenuLink--active" to="/">Start</Link>
                    <Link className="lowerMenuLink" to="/#steps">O co chodzi?</Link>
                    <Link className="lowerMenuLink" to="/">O nas</Link>
                    <Link className="lowerMenuLink" to="/">Fundacja i organizacje</Link>
                    <Link className="lowerMenuLink" to="/">Kontakt</Link>
                </>
            }
        </div>
    );
};

export default LowerMenu;