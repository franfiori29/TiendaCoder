import React, { useState, useEffect } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styles from './Item.module.css';
import { useCartContext } from '../../../../context/CartContext';
import _ from 'lodash';

export default function Item({ item }) {
    const [stock, setStock] = useState(item.stock);
    const { cart } = useCartContext();

    useEffect(() => {
        if (cart.length) {
            let itemInCart = cart.find(obj => obj.item.id === item.id);
            if (!_.isEmpty(itemInCart)) {
                setStock(s => s - itemInCart.quantity);
            }
        }
    }, [cart, item])

    return (
        <Card className={styles.cardContainer}>
            <Image className={styles.cardImage} src={item.pictureUrl} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{item.title}</Card.Header>
                <Card.Meta>
                    <span className='stock'>Stock: {stock}</span>
                </Card.Meta>
                <Card.Description>
                    ${item.price}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Link to={`/item/${item.id}`}> Ver Detalle </Link>
            </Card.Content>
        </Card>
    )
}
