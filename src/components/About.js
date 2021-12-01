import React from 'react';
import aboutImg from "../assets/People.jpg";
import decoration from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";

const About = ({name}) => {
    return (
        <section id={name} className="about">
            <div className="about__contentContainer">
                <h2 className="title">O nas</h2>
                <div className="decoration"><img alt="decoration" src={decoration}/></div>
                <p className="about__description">Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                <div className="signature"><img alt="signature" src={signature}/></div>
            </div>
            <div className="about__imgContainer">
                <img alt="about-img" src={aboutImg}/>
            </div>
        </section>
    );
};

export default About;