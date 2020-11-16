import React from 'react';
import logo from '../../assets/carrito.svg'
import { useCartContext } from '../../context/CartContext';

export default function CartWidget() {
    const { cart } = useCartContext();
    return (
        <div id="carrito">
            <img style={{ width: 40 }} src={logo} alt='' />
            {' ' + cart.length}
        </div>
    )
}
