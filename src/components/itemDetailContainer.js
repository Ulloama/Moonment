import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './itemDetail';
import { getFirestore } from '../firebase';
import { Loader } from './loader';

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

    const componentItemDetail = <ItemDetail items={items}/>

    return <Loader loading={loading} component={componentItemDetail}/>
    
};

export default ItemDetailContainer;