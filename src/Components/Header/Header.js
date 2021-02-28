import React from 'react';
import './Header.css';
import logo from '../../images/user logo.png'

const Header = () => {
    return (
        <div className="page-header">
            <img src={logo} alt=""/>
            <h4>User Information Archive</h4>
        </div>
    );
};

export default Header;