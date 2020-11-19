import React from 'react';
import { useCartContext } from '../../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cart, clear } = useCartContext();
    const totalPrice = cart.reduce((acc, item) => { return acc + (item.quantity * item.item.price) }, 0)
    return (
        <>
            { cart.length && <div style={{
                textAlign: 'center',
                margin: 'auto',
                marginTop: '10px',
                fontSize: '30px',
                borderBottom: '1px solid black',
                width: '150px'
            }} onClick={clear}><a href='#'>VACIAR</a></div>}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {cart.length ? cart.map(elem => <CartItem item={elem.item} quantity={elem.quantity} />) :
                    <h1 style={{ textAlign: 'center', width: '100%', margin: '20px' }}>
                        <Link to='/'>
                            Sin items... <br />
                            <button> Volver al menú principal</button>
                        </Link>
                    </h1>
                }
            </div>
            {totalPrice && <h2 style={{ textAlign: 'center', marginTop: '10px' }}>Total a pagar: {totalPrice}</h2>}

        </>
    )
}
