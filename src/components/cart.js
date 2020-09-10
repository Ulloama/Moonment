import React from 'react';
import {ListCartProvider, useListCartProvider} from '../context/contextCart';

function Cart () {
    const { list, quantity, EmptyCart } = useListCartProvider();

    return <ListCartProvider value={[]}>
        <>
          <button onClick={EmptyCart}>Clean</button>
          <h2>Items {quantity}</h2>
{/*           <ul>{list.map(i => <li>{i}</li>)}</ul>
 */}  </>

    </ListCartProvider>

};

export default Cart;