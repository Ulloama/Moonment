import React from 'react';
import { Link } from 'react-router-dom';

function Links () {
    return (
      <>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <Link to={`/`}>
              <li className="nav-item active">
                <a className="nav-link" href="#">Inicio<span className="sr-only">(current)</span></a>
              </li>
          </Link>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Productos
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Remeras</a>
                <a className="dropdown-item disabled" href="#">Pantalones</a>
                <a className="dropdown-item disabled" href="#">Camperas</a>
              </div>
            </li>
        </ul>
      </div>
      </>
)}

export default Links;

    