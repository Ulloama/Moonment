import React from 'react'
import { useContextCart } from '../context/contextCart';
import { Link } from 'react-router-dom';

export function CartDetail({ checkout }) {
    const { cart, EmptyCart, deleteItem, totalP } = useContextCart();

    return <>
        <div className="row" style={{paddingBottom: 15}}>
            <div className="col-md-12">
                <div className="card text-center" >
                    <div className="card-header">
                        <strong>Carrito de compras</strong>
                        <button type="button" className="btn btn-sm btn-dark float-right" onClick={EmptyCart}>Vaciar</button>
                    </div>
                    <div className='card-body'>
                        <ul className="list-group list-group-flush">
                            {cart.map(i =>
                                <li className="list-group-item" key={i.id}>
                                    <div className="row">
                                        <div className="col-md-1 float-left" ><span className="badge badge-dark" style={{fontSize: 15}}>{i.quantity}</span></div>
                                        <div className="col-md-5">{i.name} {i.brand} {i.color}</div>
                                        <div className="col-md-3">${i.price * i.quantity}</div>
                                        <div className="col-md-3">
                                            <button type='button' className='btn' style={{ paddingTop: 0 }} onClick={() => deleteItem(i)}>
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </li>)}
                        </ul>
                    </div>
                    <div className='card-footer'>
                            <p className="float-right"><strong>Total ${totalP}</strong></p>
                    </div>
                </div>
            </div>
            <div className="col-md-12" style={{paddingTop: 15}}>
                <div className="float-right" style={{ paddingLeft:10}}>
                    <input type="submit" className="btn btn-dark"  value='Checkout' onClick={checkout} />
                </div>
                <div className="float-right">
                    <Link to={`/`}>
                        <button className="btn btn-dark">Seguir comprando</button>
                    </Link> 
                </div>

            </div>
        </div>
    </>
};