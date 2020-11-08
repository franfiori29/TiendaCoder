import React from 'react';
import Item from '../Item/Item.js';
import { Link } from 'react-router-dom';

export default function ItemList(props) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {props.items.map(itemDeArray => <Link to={`/item/${itemDeArray.id}`} > <Item item={itemDeArray} key={itemDeArray.id} /></Link>)}
        </div>
    )
}
