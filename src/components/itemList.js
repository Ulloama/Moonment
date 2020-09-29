import React from 'react';
import Items from './items';
import { Loader } from './loader';

function ItemList ({items}) {
    const componentItems = <div className="row row-cols-1 row-cols-md-4">
                                <Items products={items} key={items.id}/>
                        </div>;

    return <>
            <Loader component={componentItems}/>
        </>

};


export default ItemList;

