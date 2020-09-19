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
        const items = itemCollection.doc(id);

        items.get().then((doc) => {
            if (!doc.exists) {
                return;
            }
            setItems({ id: doc.id, ...doc.data() });
        }).catch((error) => {
            console.log('Error buscando items', error);
        }).finally(() => {
            setLoading(false);
        });
    },[id]);

    return <>
            {loading && 
            <div classNameName="d-flex justify-content-center" style={{padding: 50}}>
                <div classNameName="spinner-grow text-primary" role="status"><span classNameName="sr-only">Loading...</span></div>
            </div>}
            <ItemDetail items={items}/>
            </>
};

export default ItemDetailContainer;
