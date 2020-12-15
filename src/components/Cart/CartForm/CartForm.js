import React, { useEffect, useState } from 'react'
import { Form } from 'semantic-ui-react'
import styles from './CartForm.module.css';

export default function CartForm({ createOrder }) {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [confirm, setConfirm] = useState('');
    const [tel, setTel] = useState('');
    const [enabled, setEnable] = useState(false);

    useEffect(() => {
        if (name &&
            mail &&
            confirm &&
            /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(tel)) {
            setEnable(true);
        } else setEnable(false);
    }, [name, mail, confirm, tel]);

    const handleChange = (evt) => {
        switch (evt.target.id) {
            case "nombre":
                setName(evt.target.value);
                break;
            case "mail":
                setMail(evt.target.value);
                break;
            case "confirm":
                setConfirm(evt.target.value);
                break;
            case "tel":
                setTel(evt.target.value);
                break;
            default:
                console.log('?')
        };
    };
    return (
        <Form className={styles.checkoutForm} onChange={handleChange}>
            <Form.Input label="Nombre: " id="nombre" type="text" required />
            <Form.Input label="E-mail: " id="mail" type="email" required />
            <Form.Input label="Repetir E-mail: " id="confirm" type="email" required />
            <Form.Input label="Teléfono: " id="tel" type="number" required />
            <Form.Button size="big" onClick={(e) => createOrder(e, name, mail, tel)}
                disabled={!enabled}>Terminar Compra</Form.Button>
        </Form>
    )
};
