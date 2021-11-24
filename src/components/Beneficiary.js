import React from 'react';
import decoration from "../assets/Decoration.svg";

const Beneficiary = ({name}) => {




    return (
        <section id={name} className="beneficiary">
            <div className="beneficiary__container container">
                <h2 className="beneficiary__title">Komu pomagamy?</h2>
                <div className="beneficiary__decoration"><img alt="decoration" src={decoration}/></div>
                <div className="beneficiary__objects-container">
                    <div className="beneficiary__object button">Fundacjom</div>
                    <div className="beneficiary__object button">Organizacjom pozarządowym</div>
                    <div className="beneficiary__object button">Lokalnym zbiórkom</div>
                </div>
                <p className="beneficiary__description">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <ul className="beneficiary__list">
                    <li className="beneficiary__item">
                        <div className="item__data">
                            <p className="item__name">Fundacja “Dbam o Zdrowie”</p>
                            <p className="item__description">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                        </div>
                        <p className="item__needs">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </li>
                    <li className="beneficiary__item">
                        <div className="item__data">
                            <p className="item__name">Fundacja “Dbam o Zdrowie”</p>
                            <p className="item__description">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                        </div>
                        <p className="item__needs">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </li>
                    <li className="beneficiary__item">
                        <div className="item__data">
                            <p className="item__name">Fundacja “Dbam o Zdrowie”</p>
                            <p className="item__description">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                        </div>
                        <p className="item__needs">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </li>
                </ul>
                <ul className="pagination">
                    <li className="page">1</li>
                    <li className="page">2</li>
                    <li className="page">3</li>
                </ul>
            </div>
        </section>
    );
};

export default Beneficiary;