import React from 'react';
import { useCartContext } from '../../context/CartContext';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';
import { Button } from 'semantic-ui-react';

export default function Cart() {
    const { cart, clear } = useCartContext();
    const totalPrice = cart.reduce((acc, item) => { return acc + (item.quantity * item.item.price) }, 0);

    return (
        <>
            {!!cart.length && <div className={styles.vaciar} onClick={clear}><a href='#'>VACIAR</a></div>}

            <div className={styles.divContainer}>
                {cart.length ? cart.map(elem => <CartItem key={elem.item.id} item={elem.item} quantity={elem.quantity} />) :
                    <Link to='/' className={styles.sinItems}>
                        <br />
                        <Button size="massive">Sin items... Volver al menú principal</Button>
                    </Link>
                }
            </div>

            {!!totalPrice && <h2 className={styles.totalPagar}>Total a pagar: ${totalPrice}</h2>}
        </>
    )
}
