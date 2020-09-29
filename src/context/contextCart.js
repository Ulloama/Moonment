import React, { useState, useContext } from 'react';

export const ContextCart = React.createContext([]);

export const useContextCart = () => useContext(ContextCart);

export function ListCartProvider ({initialValue = [], children}) {
    const [list, setList] = useState (initialValue);
    const [totalCount, setTotalCount] = useState();

    function AddItem(newItem) {
        const l = [...list, newItem];
        setList (l);
    };

    function deleteItem(oldItem) {
        const l = list.filter(l => l.id !== oldItem.id);
        setList(l);
    }

    function EmptyCart() {
        setList ([]);
    };

    const reduceList = list.reduce((acumulador, newItem) => {
        const itemExist = acumulador.find(item => item.id === newItem.id);
        if (itemExist) {
            return acumulador.map((item) => {
                if (item.id === newItem.id) {
                    return {
                        ...item,
                        price: item.price + newItem.price,
                    }
                }

                return item;
            })
        }
        return [...acumulador, newItem];
    }, []);

    const total = reduceList.reduce((prev, next) => prev + next.price, 0);

    function SyncCount (totalCount) {
        setTotalCount(totalCount);
    };

    return( 
        <ContextCart.Provider value={{ totalCount, SyncCount, list, AddItem, deleteItem, quantity: list.length, EmptyCart, reduceList, total }}>
            {children}
        </ContextCart.Provider>
    );
};