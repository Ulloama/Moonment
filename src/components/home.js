import React, { useState, useEffect} from 'react';
import Greeting from './greeting';
import Items from './items'
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';
import { Loader } from './loader';
import { ErrorDetail } from './errorDetail';

function Home () {
    const { categoryId = undefined} = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(true);

    useEffect(() => {
        const db = getFirestore();
       
        let collection = db.collection('items');

        let filteredItems = categoryId ? collection
        .where('categoryId', '==', categoryId) : collection;

        filteredItems.get().then((querySnapshot) => {
            if(querySnapshot.size === 0) {
                setError(false);
            }
            setItems(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            }).catch(() => {
                setError(false);
            }).finally(() => {
                setLoading(false);
            });
    }, [categoryId]);


    const componentItems = <div className="row row-cols-1 row-cols-md-4">
                                <Items products={items}/>
                        </div>;

    return <>
            <Greeting/>
            {error === false ? <ErrorDetail/> : <Loader loading={loading} component={componentItems}/>}
        </>
};

export default Home;