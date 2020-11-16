import React from 'react'
import { useCartContext } from '../../context/CartContext'

export default function CartItem({ item, quantity }) {
    const { removeItem } = useCartContext();
    return (
        <div style={{
            border: '2px solid black',
            margin: '10px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: ' center',
            width: '300px',
            height: '200px',
            borderRadius: '40px'
        }}>
            <p style={{ flex: '1' }}><b>{item.title}</b></p>
            <p>Agregados: {quantity}</p>
            <p>Precio: {item.price * quantity}</p>
            <button onClick={() => removeItem(item.id)}>REMOVE ITEM</button>
        </div>
    )
}
