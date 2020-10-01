import React, { useState } from 'react';
import { CartForm } from './cartForm';
import { CartDetail } from './cartDetail'

export function CartDetailContainer({setBuyerInfo, createOrder, buyer}) {
    const [showForm, setShowForm] = useState(false);
    const showF = () => {setShowForm(true); }

    return (
        <>
        <div className="d-flex justify-content-center" style={{ padding: 15 }}>
            <div className="container" style={{ width: 800 }}>
                <CartDetail checkout={showF}/>
                {showForm ? <CartForm setBuyerInfo={setBuyerInfo} buyer={buyer} createOrder={createOrder}/> : null}
            </div>
        </div>
        </>)
};
//            
