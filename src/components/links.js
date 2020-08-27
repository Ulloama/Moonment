import React from 'react';

function Links () {
    return (
      <>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Inicio<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categorias
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">Sub-Categoría 1</a>
              <a className="dropdown-item" href="#">Sub-Categoría 2</a>
              <a className="dropdown-item" href="#">Sub-Categoría 3</a>
              <a className="dropdown-item" href="#">Sub-Categoría 4</a>
            </div>
          </li>
        </ul>
      </div>
      </>
)}

export default Links;

    