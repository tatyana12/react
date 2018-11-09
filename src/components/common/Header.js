import React from 'react';
import './Header.css';
import applogo from './logo.png';

const Header = () => {
    return (
        <div className="Header">
           <img src={applogo} className="Header-logo" alt="logo for CNIT 133A application" />
        </div>
    );
}

export default Header;