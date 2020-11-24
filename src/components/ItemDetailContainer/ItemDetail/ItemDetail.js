import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import styles from './ItemDetail.module.css';
import { useCartContext } from '../../../context/CartContext';
import _ from 'lodash';

export default function ItemDetail({ item }) {

    const [stock, setStock] = useState(item.stock);
    const [toCart, setToCart] = useState(null);
    const { addItem, cart } = useCartContext();

    useEffect(() => {
        console.log(stockFromCart())
        setStock(stock - stockFromCart())
    }, [])

    function handleAdd(toAdd) {
        if (!stock) { alert("No hay stock") }
        else {
            setStock(stock - toAdd);
            if (toAdd) {
                setToCart(toCart + toAdd)
                addItem(item, toAdd)
            } else setToCart(toCart)
        }
    }

    function stockFromCart() {
        if (cart.length) {
            let itemInCart = cart.find(obj => obj.item.id === item.id);
            if (!_.isEmpty(itemInCart)) {
                return itemInCart.quantity;
            } else return 0;
        }
        return 0
    }

    return (
        <div className={styles.itemDetail} >
            <p className={styles.itemTitle} > <b>{item.title}</b></p>
            <p><b>{item.description}</b></p>
            <img src={item.pictureUrl} className={styles.itemImage} alt='fotoDelAuto' />
            <div className={styles.itemDescription}>
                <p><b>${item.price}</b></p>
                {!toCart && <ItemCount stock={stock} initial={0} onAdd={handleAdd} />}
                {toCart && <Link to='/carrito' className={styles.itemTerminarCompra}>Terminar Compra</Link>}
            </div>
        </div >
    )
}
