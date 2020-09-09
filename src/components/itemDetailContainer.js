import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './itemDetail';
import { getFirestore } from '../firebase';

function ItemDetailContainer() {
    const {id} = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        const db = getFirestore();

        const itemCollection = db.collection('items');

        itemCollection.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                console.log('No existen items.')
            }
            setLoading(false);
            setItems(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id})));
            //setItems(querySnapshot.docs.map(doc => doc.data()));
        });
    },[id]);

    return <>
            {loading && 
            <div class="d-flex justify-content-center" style={{padding: 50}}>
                <div class="spinner-grow text-primary" role="status"><span class="sr-only">Loading...</span></div>
            </div>}
            <ItemDetail items={items}/>
            </>
};

export default ItemDetailContainer;