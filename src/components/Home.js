import React from 'react';
import Header from "./Header";
import Statistics from "./Statistics";
import Steps from "./Steps";
import About from "./About";
import Beneficiary from "./Beneficiary";
import Contact from "./Contact";

const Home = () => {
    return (
        <div>
            <Header/>
            <Statistics/>
            <Steps name="steps"/>
            <About name="about"/>
            <Beneficiary name="beneficiary"/>
            <Contact name="contact"/>
        </div>
    );
};

export default Home;