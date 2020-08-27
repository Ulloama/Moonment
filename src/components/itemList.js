import React, { useState, useEffect} from 'react';
import Items from './items';
import ProductStore from './productStore';


function Products() {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res (ProductStore)},
            2000);
    });
};

function ItemList () {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        Products().then(res => {
            setProducts(res);
            setLoading(false);
        }); 
    }, []);


    return(<>
            <div class="d-flex justify-content-center" style={{padding: 30}}>
                {loading && 
                <div class="d-flex justify-content-center" style={{padding: 50}}>
                    <div class="spinner-grow text-primary" role="status"><span class="sr-only">Loading...</span></div>
                </div>}
                <div class="card-deck text-center">
                    <Items products={products}></Items>
                </div>
            </div>
    </>
)};

export default ItemList;

