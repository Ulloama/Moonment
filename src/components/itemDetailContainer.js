import React, { useState, useEffect} from 'react';
import ProductStore from './productStore'
import { useParams } from 'react-router-dom';
import ItemCount from './itemCount';


/* function Detail() {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res (ProductStore)},
            3000);
    });
}; */

const getItem = (id) => {
    const items = ProductStore({id}).find(i => i.id === id);
    console.log(items);
    return items;
}

function ItemDetailContainer() {
    const {id} = useParams ();
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
            setItems(getItem(id));
            setLoading(false)
        
    }, [id]);

    return <>
            {loading && 
            <div class="d-flex justify-content-center" style={{padding: 50}}>
                <div class="spinner-grow text-primary" role="status"><span class="sr-only">Loading...</span></div>
            </div>}

            {items &&
                <div class="container" key={items.id} style={{ paddingTop: 30 }}>
                    <div class='row'>
                        <div class="col-md-6"><img src={items.img} class='rounded' style={{ height: 500, width: 500 }} alt={items.name} /></div>
                        <div class="col-md-6" style={{ padding: 25 }}>
                            <div style={{ paddingBottom: 30, borderBottomStyle: 'double' }}>
                                <h4 style={{ fontSize: 35 }} >{items.name} {items.brand} {items.color}</h4>
                                <h6 style={{ fontSize: 20 }}>${items.price}</h6>
                            </div>
                            <p>Talles disponibles: {items.size}.</p>
                            <div class="d-flex justify-content-center" style={{ paddingBottom: 10 }}>
                                <div><ItemCount ini={items.ini} min={items.min} max={items.stock} /></div>
                            </div>
                            <div style={{ paddingBottom: 30 }}>
                                <button type='button' class='btn btn-outline-dark btn-block'>Agregar al carrito</button>
                            </div>
                            <div style={{ textAlign: 'justify' }}><p><strong>{items.description}</strong></p></div>
                        </div>
                    </div>
                </div>}
    </>
};

export default ItemDetailContainer;



/* useEffect (() => {
    Detail().then(res => {
        setItems(getItem(id));
        setLoading(false)
    }); 
}, [id]); */