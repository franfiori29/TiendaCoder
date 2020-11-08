import React, { useState } from 'react';
import ItemCount from '../../ItemCount/ItemCount';
import { Link } from 'react-router-dom';




export default function ItemDetail(props) {

    const [stock, setStock] = useState(props.item.stock);
    const [toCart, setToCart] = useState(0);

    function handleAdd(toAdd) {
        if (!stock) { alert("No hay stock") }
        else {
            setStock(stock - toAdd);
            setToCart(toCart + toAdd);
        };
    }

    return (
        <div style={{
            padding: '10px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: ' center',
            width: '70%',
            margin: 'auto'
        }} >
            <p style={{ flex: '1', textAlign: 'center', fontSize: '30px' }} > <b>{props.item.title}</b></p>
            <p><b>{props.item.description}</b></p>
            <img src={props.item.pictureUrl} style={{ width: '60%' }} alt='fotoDelAuto' />
            <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                <p><b>${props.item.price}</b></p>
                {!toCart && <ItemCount stock={stock} initial={0} onAdd={handleAdd} />}
                <Link to='/carrito' style={{ paddingTop: '20px', fontWeight: '600', borderBottom: '1px solid black' }}>Terminar Compra</Link>
            </div>
        </div >
    )
}
