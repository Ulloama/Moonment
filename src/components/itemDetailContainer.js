import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './itemDetail';
import { getFirestore } from '../firebase';
import { Loader } from './loader';
import { ErrorDetail } from './errorDetail';

function ItemDetailContainer() {
    const {id} = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);

    useEffect (() => {
        const db = getFirestore();

        const itemCollection = db.collection('items');
        const items = itemCollection.doc(id);

        items.get().then((doc) => {
            if (!doc.exists) {
                return setError(false);
            }
            setItems({ id: doc.id, ...doc.data() });
        }).catch(() => {
            setError(false);
        }).finally(() => {
            setLoading(false);
        });
    },[id]);

    const componentItemDetail = <ItemDetail items={items}/>

    return <>
        {error === false ? <ErrorDetail/> : <Loader loading={loading} component={componentItemDetail}/>}
    </>
};

export default ItemDetailContainer;