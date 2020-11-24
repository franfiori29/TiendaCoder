import React from 'react';
import Item from '../Item/Item.js';
import styles from './ItemList.module.css';
import { Card } from 'semantic-ui-react';

export default function ItemList(props) {
    return (
        <Card.Group className={styles.itemList}>
            {props.items.map(itemDeArray => <Item key={itemDeArray.id} item={itemDeArray} />)}
        </Card.Group>
    )
}
