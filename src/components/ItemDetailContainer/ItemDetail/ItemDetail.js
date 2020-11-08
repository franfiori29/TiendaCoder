import React, { useState } from 'react'
import ItemCount from '../../ItemCount/ItemCount'



export default function ItemDetail(props) {

    const [stock, setStock] = useState(props.item.stock);

    function handleAdd(toAdd) {
        if (!stock) { alert("No hay stock") }
        else setStock(stock - toAdd);
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
            <p style={{ flex: '1', textAlign: 'center' }} > <b>{props.item.title}</b></p>
            <p><b>{props.item.description}</b></p>
            <img src={props.item.pictureUrl} style={{ width: '60%' }} />
            <div style={{ textAlign: 'center' }}>
                <p><b>${props.item.price}</b></p>
                <ItemCount stock={stock} initial={0} onAdd={handleAdd} />
            </div>
        </div >
    )
}
