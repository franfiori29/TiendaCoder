import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styles from './Item.module.css';

export default function Item({ item }) {
    return (
        <Card className={styles.cardContainer}>
            <Image src={item.pictureUrl} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{item.title}</Card.Header>
                <Card.Meta>
                    <span className='stock'>Stock: {item.stock}</span>
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
