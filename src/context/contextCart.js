import React, { useState, useContext } from 'react';

export const ContextCart = React.createContext([]);

export const useContextCart = () => useContext(ContextCart);

export function ListCartProvider ({initialValue = [], children}) {
    const [list, setList] = useState (initialValue);
    const [totalQ, setTotalQ] = useState(0);

    function AddItem(newItem) {
        const suma = totalQ + newItem.quantity
        const l = [...list, newItem];
        setList (l);
        setTotalQ(suma);
    };

    function deleteItem(oldItem) {
        const l = list.filter(l => l.id !== oldItem.id);
        setList(l);
    }

    function EmptyCart() {
        setList ([]);
        setTotalQ(0);
    };

    const cart = list.reduce((acumulador, newItem) => {
        const itemExist = acumulador.find(item => item.id === newItem.id);
        if (itemExist) {
            return acumulador.map((item) => {
                if (item.id === newItem.id) {
                    return {
                        ...item,
                            quantity: item.quantity + newItem.quantity,
                    }
                }
                return item;
            })
        }
        return [...acumulador, newItem];
    }, []);

    const totalP = cart.reduce((prev, next) => prev + next.price * next.quantity, 0);

    const itemsCart = cart.map(cartItems => ({
        id: cartItems.id,
        title: cartItems.name,
        brand: cartItems.brand,
        color: cartItems.color,
        price: cartItems.price,
        quantity: cartItems.quantity})
    );

    return( 
        <ContextCart.Provider value={{ list, AddItem, deleteItem, quantityL: list.length, EmptyCart, cart, totalQ, totalP, itemsCart}}>
            {children}
        </ContextCart.Provider>
    );
};