import React from 'react';
import { Link } from 'react-router-dom'


function Item ({products}) {
    

    const ToDetail = (id) => {
        console.log(id)
    }
 
    return products.map((p, idx) => 
            <>
        <div class="col mb-4">
            <div class="card border-light" key={p.id} onClick={() => ToDetail(`${p.id}`)}>
                <Link to={`/item/${p.id}`}>
                    <img src={p.img} class="card-img-top" style={{padding: 30}} alt={p.name}/>
                </Link>
                <div class="card-body text-center">
                    <h5 class="card-title" >{p.name} {p.brand} {p.color}</h5>
                    <Link to={`/item/${p.id}`}>
                        <button type='button' class='btn btn-outline-dark btn-block'>Ver detalle</button>
                    </Link>
                </div>
            </div>
        </div>
            </>)
};

export default Item;

