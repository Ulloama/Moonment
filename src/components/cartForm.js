import React from 'react';

export function CartForm ({createOrder, setBuyerInfo, buyer}){
    return <>
            <div className="card text-left">
                <div className="card-header">
                    Antes de confirmar tu pedido indicanos los siguientes datos
                </div>
                <form id="buyerInfo">
                    <div className="form-row" style={{padding: 15}}>
                        <div className="form-group col-md-12">
                            <label>Nombre y apellido</label>
                            <input type="text" className="form-control" 
                            placeholder="¿Quien recibe?" 
                            value={buyer.name}
                            onChange={setBuyerInfo("name")}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>E-mail</label>
                            <input type="email" className="form-control" 
                            placeholder="Ingresa tu email"
                            value={buyer.email}
                            onChange={setBuyerInfo("email")}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Repite tu E-mail</label>
                            <input type="email2" className="form-control" 
                            placeholder="Repite tu email"
                            value={buyer.email2}/>
                        </div>
                        <div className="form-group col-md-12">
                            <label>Teléfono</label>
                            <input type="text" className="form-control"
                            placeholder="+541234567890"
                            value={buyer.phone}
                            onChange={setBuyerInfo("phone")}/>
                        </div>
                    </div>
                </form>
                <div className='card-footer'>
                    <button type='button' className='btn btn-dark float-right' onClick={createOrder}>Finalizar compra</button>
                </div>
            </div>
</>
};