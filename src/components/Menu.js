import React from 'react';
import UpperMenu from "./UpperMenu";
import LowerMenu from "./LowerMenu";

const Menu = () => {
    return (
        <nav className="navigation">
            <div className="menus-container container">
                <UpperMenu/>
                <LowerMenu/>
            </div>
        </nav>
    );
};

export default Menu;