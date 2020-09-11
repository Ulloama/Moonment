import React from 'react';
import { ListCartProvider, useContextCart } from '../context/contextCart';

function Cart() {
    const { list, quantity, EmptyCart } = useContextCart();

    return <ListCartProvider value={[]}>
        <>
        <div className="d-flex justify-content-center" style={{padding: 15}}>
            <div className="card text-center" style={{width:800}}>
                <div className="card-header"><strong>Carrito de compras</strong></div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                </ul>
                <div className='card-footer row'>
                <div className="row col-sm-12"></div>
                <div className="col-sm-6">
                    <button style={{position: float}} type="button" className="btn btn-dark">Vaciar carrito</button>
                    <button style={{position: float}} type="button" className="btn btn-dark">Comprar</button>
                </div>
                </div>
            </div>
        </div>
 </>

    </ListCartProvider>

};

export default Cart;

            {/*           <ul>{list.map(i => <li>{i}</li>)}</ul>
 */} 