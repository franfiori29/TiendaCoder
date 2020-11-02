import React from 'react';
import Item from '../Item/Item';

export default function ItemList(props) {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {/* {console.log(props.items)} */}
            {props.items.map(itemDeArray => <Item item={itemDeArray} key={itemDeArray.id} />)}
        </div>
    )
}
