import React, { useContext, useState } from 'react';
import _ from 'lodash';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children, defaultCart }) => {

    const [cart, setCart] = useState(defaultCart);

    const addItem = (item, quantity) => {
        let newCart = cart.map(elem => elem.item.id === item.id ? { ...elem, quantity: quantity + elem.quantity } : elem);
        if (_.isEqual(cart, newCart)) {
            newCart.push({ item, quantity });
            setCart(newCart)
        } else {
            setCart(newCart);
        }
    }

    const removeItem = (itemid) => {
        let newCart = cart.filter(elem => elem.item.id !== itemid);
        setCart(newCart);
    }

    const clear = () => {
        setCart([]);
    }

    return <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
        {children}
    </CartContext.Provider>
}
