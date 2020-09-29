import React from 'react';
import { Link } from 'react-router-dom'


function Item ({products}) {
    

    const ToDetail = (id) => {
    }
 
    return products.map((p) => 
            <>
        <div className="col mb-4">
            <div className="card border-light" key={p.id} onClick={() => ToDetail(`${p.id}`)}>
                <Link to={`/item/${p.id}`} key={p.id}>
                    <img src={p.img} className="card-img-top" style={{padding: 30}} alt={p.name}/>
                </Link>
                <div className="card-body text-center">
                    <h5 className="card-title" >{p.name} {p.brand} {p.color}</h5>
                    <Link to={`/item/${p.id}`} key={p.id}>
                        <button type='button' className='btn btn-outline-dark btn-block'>Ver detalle</button>
                    </Link>
                </div>
            </div>
        </div>
            </>)
}; 

export default Item; 