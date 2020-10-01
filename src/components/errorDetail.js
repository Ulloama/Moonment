import React from 'react';
import { Link } from 'react-router-dom';

export function ErrorDetail () {
    return <>
        <div className="d-flex justify-content-center" style={{paddingTop: 50}}>
            <div className="card text-center" style={{width:800}}>
                <div className="card-header"><strong>¡Ups! Ocurrio un error</strong></div>
                <div className='card-body'>
                        <h4  style={{ paddingBottom:20 }}>La categoría y/o producto que buscas no se encuentra disponible</h4>
                    <Link to={`/`}>
                        <button className="btn btn-dark">Volver al inicio</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
};