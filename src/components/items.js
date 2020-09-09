import React from 'react';
import { Link } from 'react-router-dom'


function Item ({products}) {
    

    const ToDetail = (id) => {
        console.log(id)
    }
 
    return products.map((p, idx) => 
            <>
            <div class="card" key={p.id} onClick={() => ToDetail(`${p.id}`)}>
                <Link to={`/item/${p.id}`}>
                    <img src={p.img} class="card-img-top" alt={p.name}/>
                </Link>
                <div class="card-body">
                    <h5 class="card-title" >{p.name} {p.brand} {p.color}</h5>
                    <button type='button' class='btn btn-outline-dark btn-sm btn-block'>Detalle</button>
                </div>
            </div>
            </>)
};

export default Item;

