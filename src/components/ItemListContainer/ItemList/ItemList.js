import React from 'react';
import Item from '../Item/Item.js';
import styles from './ItemList.module.css';

export default function ItemList(props) {
    return (
        <div className={styles.itemList}>
            {props.items.map(itemDeArray => <Item key={itemDeArray.id} item={itemDeArray} />)}
        </div>
    )
}
