import React from 'react';
import styles from '../styles/headerbar.css';



const HeaderBar = ({ menuItems, handleScroll }) => {
    return (
        <header>
        <nav>
            <div className="logo-container">
                    <button className="logo-button" onClick={() => handleScroll("home")}> <img src='../../../Fermenti1.svg' className="logo" alt="Logo" /></button>
                    
               
            </div>
            <div className="nav-menu">
                <ul>
                    {menuItems.map((menu) => (
                        <li key={menu.id}>
                            <button className="custom-button" onClick={() => handleScroll(menu.id)}>{menu.title}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    </header>
    );
};

export default HeaderBar;
