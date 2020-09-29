import React, { useState } from 'react';
import ItemCount from './itemCount'
import ButtonAddToCart from './buttonAddToCart';
import { useContextCart } from '../context/contextCart';

function ItemDetail({items}) {
    const { totalCount, SyncCount} = useContextCart();
    //const [totalCount, setTotalCount] = useState();

/*     function SyncCount (totalCount) {
        setTotalCount(totalCount);
    }; */

    return <>
        <div className="container" key={items.id} style={{paddingTop: 30}}>
            <div className='row'>
                <div className="col-md-6"><img src={items.img} className='rounded' style={{ height: 500, width: 500 }} alt={items.name} /></div>
                <div className="col-md-6" style={{ padding: 25}}>
                    <div style={{paddingBottom: 30, borderBottomStyle: 'double' }}>
                        <h4 style={{ fontSize: 35 }} >{items.name} {items.brand} {items.color}</h4>
                        <h6 style={{ fontSize: 20 }}>${items.price}</h6>
                    </div>
                    <p>Talles disponibles: {items.size}.</p>
                    <div className="d-flex justify-content-center" style={{ paddingBottom: 10 }}>
                        <div><ItemCount ini={items.ini} min={items.min} max={items.stock} onAdd={1} onChange={SyncCount}/></div>
                    </div>
                    <div style={{ paddingBottom: 30 }}>
                        <ButtonAddToCart totalCount={totalCount} i={items}/>
                    </div>
                    <div style={{ textAlign: 'justify' }}><p><strong>{items.description}</strong></p></div>
                </div>
            </div>
        </div>
    </>
    }

export default ItemDetail;