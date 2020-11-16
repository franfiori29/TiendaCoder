import React from 'react';
import { useCartContext } from '../../context/CartContext';
import CartItem from './CartItem';

export default function Cart() {
    const { cart, clear } = useCartContext();
    return (
        <>
            <div style={{
                textAlign: 'center',
                margin: 'auto',
                marginTop: '10px',
                fontSize: '30px',
                borderBottom: '1px solid black',
                width: '150px'
            }} onClick={clear}><a href='#'>VACIAR</a></div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {cart.length ? cart.map(elem => <CartItem item={elem.item} quantity={elem.quantity} />) :
                    <h1 style={{ textAlign: 'center', width: '100%', margin: '20px' }}>Sin items...</h1>}
            </div>
        </>
    )
}
