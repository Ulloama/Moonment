import React, {useState, useEffect} from 'react';
import { CartLoader } from './cartLoader';
import { useContextCart } from '../context/contextCart';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { getFirestore } from '../firebase';
import { Order } from './order';
import { OrderError } from './orderError';
 
function Cart() {
    const [loading, setLoading] = useState(true);
    const [loadingOrder, setLoadingOrder] = useState(true);
    const { cart, itemsCart, totalP } = useContextCart();
    const [buyer, setBuyer] = useState({name:'', email:'', phone:''});
    const [orderId, setOrderId] = useState();
    const [error, setError] = useState(true);
    const setBuyerInfo = (attr) => (evt) => setBuyer({...buyer,[attr]: evt.target.value})

    function createOrder() {
        const db = getFirestore();

        const orders = db.collection('orders');
        const newOrder = {
            buyer: buyer,
            items: itemsCart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalP,
        };

        orders.add(newOrder).then(({id}) => {
            setOrderId(id);
        }).catch(() => {
            setError(false);
        }).finally(() => {
            setLoadingOrder(false);
        });

    };
 
    useEffect (() => {
        if ( cart.length === 0 ) {
            setLoading(false);
        };
    },[cart.length]);

    const loaderCart= <CartLoader loading={loading} 
                        setBuyerInfo={setBuyerInfo}
                        buyer={buyer}
                        createOrder={createOrder}
                    />

    return  <>
            
            {error === false ? <OrderError/> : loadingOrder === false ? <Order id={orderId}/> : loaderCart}
    </>

};

export default Cart;