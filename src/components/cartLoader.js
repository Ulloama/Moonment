import React from 'react';
import {CartDetailContainer} from './cartDetailContainer';
import { CartEmpty } from './cartEmpty'

export function CartLoader ({loading, buyerEmail, buyerName, buyerPhone}) {
    return <div className="row d-flex justify-content-center" style={{padding: 50}}>
            {loading === true ? 
            <CartDetailContainer buyerEmail={buyerEmail} buyerName={buyerName} buyerPhone={buyerPhone}/> : 
            <CartEmpty/>}
            </div>
};