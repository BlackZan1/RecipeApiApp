import React from 'react';
import style from './Navbar.module.css';

const Navbar = (props) => {
    return (
        <div className={style.Header}>
            <h2>myRecipes</h2>
        </div>
    );
};

export default Navbar;