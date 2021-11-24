import React from 'react';
import decoration from "../assets/Decoration.svg";
import icon1 from "../assets/Icon-1.svg";
import icon2 from "../assets/Icon-2.svg";
import icon3 from "../assets/Icon-3.svg";
import icon4 from "../assets/Icon-4.svg";
import {Link} from "react-router-dom";

const Steps = ({name}) => {
    return (
        <section id={name} className="steps">
            <div className="steps__heading container">
                <h2 className="steps__title">Wystarczą 4 proste kroki</h2>
                <div className="steps__decoration"><img alt="decoration" src={decoration}/></div>
            </div>
            <div className="steps__instructions-background">
                <div className="steps__instructions steps__instructions-container container">
                    <article className="steps__item">
                        <img className="steps__icon" alt="icon1" src={icon1}/>
                        <p className="steps__subtitle">Spakuj je</p>
                        <hr className="steps__separator"></hr>
                        <p className="steps__description">skorzystaj z worków na śmieci</p>
                    </article>
                    <article className="steps__item">
                        <img className="steps__icon" alt="icon2" src={icon2}/>
                        <p className="steps__subtitle">Zdecyduj komu chcesz pomóc</p>
                        <hr className="steps__separator"></hr>
                        <p className="steps__description">wybierz zaufane miejsce</p>
                    </article>
                    <article className="steps__item">
                        <img className="steps__icon" alt="icon3" src={icon3}/>
                        <p className="steps__subtitle">Wybierz rzeczy</p>
                        <hr className="steps__separator"></hr>
                        <p className="steps__description">ubrania, zabawki, sprzęt i inne</p>
                    </article>
                    <article className="steps__item">
                        <img className="steps__icon" alt="icon4" src={icon4}/>
                        <p className="steps__subtitle">Zamów kuriera</p>
                        <hr className="steps__separator"></hr>
                        <p className="steps__description">kurier przyjedzie w dogodnym terminie</p>
                    </article>
            </div>

            </div>
            <div className="steps__buttonContainer container">
                <Link to={"/login"} className="button steps__button">ODDAJ<br/>RZECZY</Link>
            </div>

        </section>
    );
};

export default Steps;