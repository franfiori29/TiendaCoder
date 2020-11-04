import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'



export default function ItemDetail(props) {
    return (
        <div style={{
            border: '3px solid black',
            margin: '10px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: ' center',
            width: '600px'
        }} >
            <p><b>{props.item.description}</b></p>
            <p><b>${props.item.price}</b></p>
            <img src={props.item.pictureUrl} style={{ width: '450px' }} />
            <ItemCount stock={props.item.stock} initial={0} />
        </div>
    )
}
