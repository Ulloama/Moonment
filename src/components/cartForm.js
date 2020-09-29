import React from 'react';

export function CartForm ({buyerEmail, buyerName, buyerPhone}){


    return <>
                <div className="col-md-12 d-flex justify-content-center" style={{ padding: 15 }}>

            <div className="card text-left" style={{width:800}}>
                <div className="card-header">
                    Antes de confirmar tu pedido indicanos los siguientes datos
                </div>
                <form name="chosencontact">
                    <div className="form-row" style={{padding: 15}}>
                        <div className="form-group col-md-12">
                            <input type="text" className="form-control" 
                            placeholder="Ingresa tu nombre"
                            onInput={buyerName}/>
                        </div>
                        <div className="form-group col-md-12">
                            <input type="email" className="form-control" 
                            placeholder="Ingresa tu email"
                            onInput={buyerEmail}/>
                        </div>
                        <div className="form-group col-md-12">
                            <input type="text" className="form-control"
                            placeholder="Ingresa tu número de teléfono"
                            onInput={buyerPhone}/>
                        </div>
                    </div>
                </form>
            </div>
            </div>

</>
};