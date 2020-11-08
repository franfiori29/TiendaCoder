import React from 'react';
import Item from '../Item/Item.js';
import { Link } from 'react-router-dom';

export default function ItemList(props) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            {props.items.map(itemDeArray => <Link to={`/item/${itemDeArray.id}`} key={itemDeArray.id}> <Item item={itemDeArray} /></Link>)}
        </div>
    )
}
