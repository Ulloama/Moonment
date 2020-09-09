import React from 'react';
import imageCard from '../assets/images/construction.png';

function Cart () {
    function createOrder() {
        const buyer = {
            name: '',
            phone: '',
            email: '',
        }

        const order = {
            buyer,
            items: [],
            date: '',
            total: '',
        }

        const item = [{
            id: '',
            title: '',
            price: '',
            wuantity: '',
        }]
    }




    return (<>
        <div class="d-flex justify-content-center" style={{padding: 50}}>
            <div class="card" style={{width: 400}}>
                <img src={imageCard} class="card-img-top" alt="under-construction" />
                <div class="card-body">
                    <p class="card-text text-center">CARRITO UNDER CONSTRUCTION</p>
                </div>
            </div>
        </div>
        </>
)};

export default Cart;