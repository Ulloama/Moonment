import React, { useState, useEffect} from 'react';
import Items from './items';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';


/* function Products() {
    return new Promise ((res, rej) => {
        setTimeout(() => {
            res (ProductStore)},
            2000);
    });
}; */

function ItemList () {
    const {id} = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        const db = getFirestore();

        const itemCollection = db.collection('items');

        itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('No existen items de mas de $200.')
            }
            setLoading(false);
            setProducts(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id})));
        });
    }, [id]);

    return<>
            <div className="d-flex justify-content-center" style={{padding: 30}}>
                {loading && 
                <div className="d-flex justify-content-center" style={{padding: 50}}>
                    <div className="spinner-grow text-primary" role="status"><span className="sr-only">Loading...</span></div>
                </div>}
                <div className="row row-cols-1 row-cols-md-4">
                    <Items products={products}></Items>
                </div>
            </div>
    </>
};

export default ItemList;

