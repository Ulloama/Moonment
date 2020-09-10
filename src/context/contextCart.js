import React, { useState, useContext, useDebugValue } from 'react';

export const ContextCart = React.createContext([]);

export const useListCartProvider = () => useContext(ContextCart);

export function ListCartProvider ({value, children}) {
    const [list, setList] = useState (value || []);

        function AddItem(newItem) {
        console.log('item agregado')
        const l = [...list, newItem];
        setList (l);
    };

    function EmptyCart() {
        setList ([]);
    };

    return <ContextCart.Provider value={{ list, AddItem, quantity: list.length, EmptyCart }}>
        {children}
    </ContextCart.Provider>


};