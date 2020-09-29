import React from 'react';
import icon from '../assets/images/moonment.png';

function Title () {
    return (<>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <a href="/" className="navbar-brand">
            <img src={icon} width="30" height="30" className="d-inline-block align-top" alt='logo'/> Moonment
        </a>
        </>)
};

export default Title;
