import React, { useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { useCartContext } from '../../context/CartContext';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
import styles from './Cart.module.css';
import { Button, Header } from 'semantic-ui-react';
import { getFirestore } from '../../firebase';
import Loading from '../Loading/Loading';

export default function Cart() {
    const { cart, clear } = useCartContext();
    const totalPrice = cart.reduce((acc, item) => { return acc + (item.quantity * item.item.price) }, 0);
    const [checkout, setCheckout] = useState(false);
    const [load, setLoad] = useState(false);

    const createOrder = async () => {
        setLoad(true);
        const newOrder = {
            buyer: {
                name: "Franco",
                phone: "+541144231668",
                email: "franfiori29@gmail.com"
            },
            items: cart.map(item => ({
                id: item.item.id,
                title: item.item.title,
                price: item.item.price,
                quantity: item.quantity
            })),
            date: firebase.firestore.FieldValue.serverTimestamp(),
            total: totalPrice
        };
        const db = getFirestore();
        const orders = db.collection("orders");

        const itemsToUpdate = db.collection("items")
            .where(firebase.firestore.FieldPath.documentId(), "in", cart.map(item => item.item.id));
        const query = await itemsToUpdate.get();
        const batch = db.batch();
        query.docs.forEach((docSnap, idx) => {
            debugger
            batch.update(docSnap.ref, { stock: docSnap.data().stock - cart[idx].quantity });
        })
        await batch.commit();

        try {
            const doc = await orders.add(newOrder);
            setCheckout(doc.id);
            console.log("orden creada con id: " + doc.id);
        } catch (err) {
            console.log(err);
        }
        setLoad(false);
    }

    return (
        <>
            { load && <Loading />}

            {!!cart.length && !checkout && <div className={styles.vaciar} onClick={clear}>VACIAR</div>}

            {!checkout && <div className={styles.divContainer}>
                {cart.length ? cart.map(elem => <CartItem key={elem.item.id} item={elem.item} quantity={elem.quantity} />) :
                    <Link to='/' className={styles.sinItems}>
                        <br />
                        <Button size="massive">Sin items... Volver al menú principal</Button>
                    </Link>
                }
            </div>
            }

            {!!totalPrice && !checkout &&
                <>
                    <Header as="h2" className={styles.totalPagar}>Total a pagar: ${totalPrice}</Header>
                    <Button size="big" onClick={createOrder}>Terminar compra</Button>
                </>
            }

            {checkout &&
                <div style={{ textAlign: "center" }}>
                    <Header as="h1">Felicitaciones! El ID de tu orden es: {checkout}</Header>
                    <Link to='/' className={styles.sinItems}>
                        <br />
                        <Button size="big" onClick={clear}>Continuar</Button>
                    </Link>
                </div>
            }
        </>
    )
}
