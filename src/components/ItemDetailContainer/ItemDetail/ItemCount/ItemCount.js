import React, { useState } from 'react';
import { Button, Label } from 'semantic-ui-react';

function ItemCount({ stock, initial, onAdd }) {

    const [toAdd, setToAdd] = useState(initial);

    function handleClick(e) {
        if (e.target.id === "subtract") {
            setToAdd(toAdd === initial ? initial : toAdd - 1)
        } else {
            setToAdd(toAdd >= stock ? stock : toAdd + 1)
        }
    }

    return (
        <>
            <Label as="a" size="big" tag style={{ marginBottom: "10px" }}>Stock: {stock} </Label>
            <Button.Group size="huge">
                <Button onClick={handleClick} id="subtract"  >-</Button>
                <Button.Or text={toAdd} />
                <Button onClick={handleClick} id="add" color="black">+</Button>
            </Button.Group>
            <Button onClick={() => onAdd(toAdd)} style={{ marginTop: "10px" }} size="huge">
                Agregar
            </Button>
        </>
    )
}

export default ItemCount;