import React, {useState, useEffect} from 'react';
import { CartLoader } from './cartLoader';
import { useContextCart } from '../context/contextCart';
 
function Cart() {
    const [loading, setLoading] = useState(true);
    const { quantity } = useContextCart();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    const buyerName = (evt) => setName(evt.target.value);
    const buyerEmail = (evt) => setEmail(evt.target.value);
    const buyerPhone = (evt) => setPhone(evt.target.value);

     const order = { 
        buyer: { name , phone, email },
 }


/*     function createOrder() {
        const buyer = {
            name: '',
            phone: '',
            email: '',
        }

        const order = {
            buyer,
            items: [],
            date: '',
            total: '',
        }

        const item = [{
            id: '',
            title: '',
            price: '',
            quantity: '',
         }]
    } */


    useEffect (() => {
        if ( quantity === 0 ) {
            setLoading(false);
        };
    },[quantity]);

    return  <>
            <CartLoader loading={loading} buyerEmail={buyerEmail} buyerName={buyerName} buyerPhone={buyerPhone}/>
    </>

};

export default Cart;