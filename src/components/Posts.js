import React from 'react';

const Posts = ({beneficiaries}) => {


    return (
        <ul className="beneficiary__list">
            {beneficiaries.map(beneficiary => (
                <li key={beneficiary.id} className="beneficiary__item">
                    <div className="item__data">
                        <p className="item__name">{beneficiary.name}</p>
                        <p className="item__description">{beneficiary.about}</p>
                    </div>
                    <p className="item__needs">{beneficiary.needs}</p>
                </li>
            ))}

        </ul>
    );
};

export default Posts;