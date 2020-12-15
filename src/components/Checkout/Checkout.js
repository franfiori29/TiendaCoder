import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Button, Header } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';


export default function Checkout() {
    const { purchase, clear } = useCartContext();
    return (
        <>
        {!purchase && <Redirect to= "/" />}
        <div style={{ textAlign: "center" }}>
            <Header as="h1">Felicitaciones! El ID de tu orden es: {purchase}</Header>
            <Link to='/' >
                <br />
                <Button size="big" onClick={clear}>Continuar</Button>
            </Link>
        </div>
        </>
    )
}
