import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'



export default function ItemDetail(props) {
    return (
        <div style={{
            margin: '10px',
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
                <ItemCount stock={props.item.stock} initial={0} />
            </div>
        </div >
    )
}
