import React from 'react';
import { useContextCart } from '../context/contextCart';

function Cart() {
    const { list, EmptyCart } = useContextCart();

    return ( 
        <>
        <div className="d-flex justify-content-center" style={{padding: 15}}>
            <div className="card text-center" style={{width:800}}>
                <div className="card-header"><strong>Carrito de compras</strong></div>
                <ul className="list-group list-group-flush">
                {list.map(i => <li className="list-group-item">{i.name}</li>)}
                </ul>
                <div className='card-footer row'>
                    <div className="row col-sm-12">
                        <div className="row col-sm-7"></div>
                        <div className="col-sm-3">
                            <button type="button" className="btn btn-dark justify-content-end" onClick={ EmptyCart }>Vaciar carrito</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-dark justify-content-end">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 </>)

};

export default Cart;

            {/*           <ul>{list.map(i => <li>{i}</li>)}</ul>
 */} 