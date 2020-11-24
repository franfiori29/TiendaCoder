import React from 'react';
import logo from '../../assets/carrito.svg'
import { useCartContext } from '../../context/CartContext';

export default function CartWidget() {
    const { cart } = useCartContext();
    const cartLength = cart.reduce((acc, item) => { return acc + item.quantity }, 0);

    return (
        <div id="carrito" >
            {cartLength !== 0 && <div>
                <img style={{ width: 40 }} src={logo} alt='' />
                {' ' + cartLength}
            </div>}
        </div >
    )
}
