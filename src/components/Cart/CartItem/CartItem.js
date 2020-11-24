import React from 'react';
import { useCartContext } from '../../../context/CartContext';
import { Button, Item, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function CartItem({ item, quantity }) {
    const { removeItem } = useCartContext();

    return (
        <Item style={{ padding: "30px", }}>
            <Item.Content>
                <Link to={`/item/${item.id}`}>
                    <Item.Header>{item.title}</Item.Header>
                </Link>
                <Item.Meta>
                    <span className='cinema'>Cantidad: {quantity}</span>
                </Item.Meta>
                <Item.Description>{item.description}</Item.Description>
                <Item.Extra>
                    <Button negative floated='right' onClick={() => removeItem(item.id)}>
                        Remover Items
                    </Button>
                    <Label>Precio total: {item.price * quantity}</Label>
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}
