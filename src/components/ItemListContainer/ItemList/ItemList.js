import React from 'react';
import Item from '../Item/Item.js';

export default function ItemList(props) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {props.items.map(itemDeArray => <Item item={itemDeArray} key={itemDeArray.id} />)}
        </div>
    )
}
