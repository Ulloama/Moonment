import React, { useState } from 'react';
import { CartForm } from './cartForm';
import { CartDetail } from './cartDetail'

export function CartDetailContainer({buyerEmail, buyerName, buyerPhone}) {
    const [showForm, setShowForm] = useState(false);
    const onClick = () => setShowForm(true)

    return (
        <>
            <CartDetail onClick={onClick}/>
            {showForm ? <CartForm buyerEmail={buyerEmail} buyerName={buyerName} buyerPhone={buyerPhone}/> : null}
        </>)
};