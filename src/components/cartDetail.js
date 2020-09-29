import React from 'react'
import { useContextCart } from '../context/contextCart';


export function CartDetail({onClick}) {
    const { totalCount, reduceList, total, EmptyCart, deleteItem } = useContextCart();

    console.log(reduceList)

    return <>
            <div className="col-md-12 d-flex justify-content-center" style={{ padding: 15 }}>
                <div className="card text-center" style={{ width: 800 }}>
                    <div className="card-header"><strong>Carrito de compras</strong></div>
                    <div className='card-body'>
                        <ul className="list-group list-group-flush">
                            {reduceList.map(i =>
                                <li className="list-group-item" key={i.id}>
                                    <div className="row">
                            <div className="col-md-6">{i.name} {i.brand} {i.color})</div>
                                        <div className="col-md-3">${i.price}</div>
                                        <div className="col-md-3">
                                            <button type='button' className='btn' style={{paddingTop:0}} onClick={() => deleteItem(i)}>
                                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </li>)}
                        </ul>
                    </div>
                    <div className='row card-footer' style={{ margin: 0 }}>
                        <div className="col-sm-12">
                            <p className="float-right" style={{ padding: 5 }}><strong>Total ${total}</strong></p>
                        </div>
                        <div className="col-sm-12">
                            <button type="button" className="btn btn-dark float-right" style={{ marginLeft: 5 }} onClick={EmptyCart}>Vaciar carrito</button>
                            <input type="submit" className="btn btn-dark float-right" value='Confirmar' onClick={onClick} />
                        </div>
                    </div>
                </div>
            </div>
    </>
}