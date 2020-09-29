import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';
import { Loader } from './loader';
import Items from './items'

function CategoryIdFilter () {
    const [category, setCategory] = useState([]);

    useEffect (() => {
        const db = getFirestore();

        const itemCollection = db.collection('items');
        itemCollection.get().then((querySnapshot) => {
            setCategory(querySnapshot.docs.map(doc => doc.data()));
        });
    }, []);


const componentItems = <div className="row row-cols-1 row-cols-md-4"><Items products={category}/></div>


return <>
        <Loader loading={loading} component={componentItems}/>
    </>

};

export default CategoryIdFilter;