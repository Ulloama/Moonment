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
                console.log('El item no existe');
                return;
            }
            console.log('Item encontrado.');
            setItems({ id: doc.id, ...doc.data() });
        }).catch((error) => {
            console.log('Error buscando items', error);
        }).finally(() => {
            setLoading(false);
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
