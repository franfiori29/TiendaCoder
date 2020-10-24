import React from 'react';
import logo from '../../assets/carrito.svg'

export default function CartWidget() {
    return (
        <div id="carrito">
            <img style={{ width: 40 }} src={logo} alt='' />
        </div>
    )
}
