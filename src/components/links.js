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
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Productos
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">Remeras</a>
                <a class="dropdown-item disabled" href="#">Pantalones</a>
                <a class="dropdown-item disabled" href="#">Camperas</a>
              </div>
            </li>
        </ul>
      </div>
      </>
)}

export default Links;

    