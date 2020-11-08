import React from 'react'

export default function Item(props) {
    return (
        <div style={{
            border: '2px solid black',
            margin: '10px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: ' center',
            width: '600px',
            borderRadius: '40px'
        }} >
            <p><b>{props.item.title}</b></p>
            <p><b>${props.item.price}</b></p>
            <img src={props.item.pictureUrl} style={{ width: '450px' }} />
        </div>
    )
}
