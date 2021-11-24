import React from 'react';

const Statistics = () => {
    return (
        <section className="statistics">
            <div className="statistics__container container">
                <article className="statistics__item">
                    <div className="statistics__number">10</div>
                    <p className="statistics__subtitle">ODDANYCH WORKÓW</p>
                    <p className="statistics__description">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </article>
                <article className="statistics__item">
                    <div className="statistics__number">5</div>
                    <p className="statistics__subtitle">WSPARTYCH ORGANIZACJI</p>
                    <p className="statistics__description">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </article>
                <article className="statistics__item">
                    <div className="statistics__number">7</div>
                    <p className="statistics__subtitle">ZORGANIZOWANYCH ZBIÓREK</p>
                    <p className="statistics__description">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </article>
            </div>
        </section>
    );
};

export default Statistics;