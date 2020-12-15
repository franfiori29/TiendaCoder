import React, { useEffect, useState } from 'react'
import { Form } from 'semantic-ui-react'

export default function CartForm({ createOrder }) {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [confirm, setConfirm] = useState('');
    const [tel, setTel] = useState('');
    const [enabled, setEnable] = useState(false);

    useEffect(() => {
        if (name && mail && confirm && tel) {
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
        };
    };
    return (
        <Form style={{ display: "flex", flexDirection: "column", width: "50%", margin: "auto" }} onChange={handleChange}>
            <Form.Input label="Nombre: " id="nombre" type="text" required />
            <Form.Input label="E-mail: " id="mail" type="email" required />
            <Form.Input label="Repetir E-mail: " id="confirm" type="email" required />
            <Form.Input label="Teléfono: " id="tel" type="number" required />
            <Form.Button size="big" onClick={(e) => createOrder(e, name, mail, tel)} disabled={!enabled}>Terminar Compra</Form.Button>
        </Form>
    )
};
