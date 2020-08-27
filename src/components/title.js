import React from 'react';
import icon from '../assets/images/moonment.png';

function Title () {
    return (
        <a className="navbar-brand">
            <img src={icon} width="30" height="30" className="d-inline-block align-top" alt='logo'/> Moonment
        </a>)
};

export default Title;
