import React from 'react';
import {Link} from "react-router-dom";
import decoration from "../assets/Decoration.svg";
import headerImg from "../assets/Home-Hero-Image.jpg";
const Header = () => {



    return (
        <section className="header">
            <div className="header__container container">
                <div className="header__imgContainer">
                    <img alt="header-img" src={headerImg}/>
                </div>
                <div className="header__contentContainer">
                    <h2 className="title">Zacznij pomagać!<br/>Oddaj niechciane rzeczy w zaufane ręce</h2>
                    <div className="decoration"><img alt="decoration" src={decoration}/></div>
                    <div className="header__linksWrapper">
                        <Link to={"/login"} className="button header__button">ODDAJ<br/>RZECZY</Link>
                        <Link to={"/login"} className="button header__button">ZORGANIZUJ<br/>ZBIÓRKĘ</Link>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Header;