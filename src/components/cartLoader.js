import React from 'react';
import {CartDetailContainer} from './cartDetailContainer';
import { CartEmpty } from './cartEmpty'

export function CartLoader ({loading, setBuyerInfo, buyer, createOrder}) {
    return <>
                {loading === true
                ? <CartDetailContainer setBuyerInfo={setBuyerInfo} buyer={buyer} createOrder={createOrder}/>
                : <CartEmpty/>}
            </>
};