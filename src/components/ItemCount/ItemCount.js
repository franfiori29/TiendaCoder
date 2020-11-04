import React, { useState } from 'react'
import './ItemCount.css'

function ItemCount({ stock, initial }) {
    const [toAdd, setToAdd] = useState(initial);

    function handleClick(e) {
        if (e.target.id === "subtract") {
            setToAdd(toAdd === initial ? initial : toAdd - 1)
        } else {
            setToAdd(toAdd >= stock ? stock : toAdd + 1)
        }
    }
    function handleAdd(toAdd) {
        if (!stock) alert("No hay stock");
    }

    return (
        <div className="itemCount">
            <span className="disponibility" >{stock} disponibles!</span>
            <div className="itemController">
                <button id="subtract" onClick={handleClick}> - </button>
                <span> {toAdd} </span>
                <button onClick={handleClick} id="add"> + </button>
            </div>
            <button onClick={() => handleAdd(toAdd)}>Agregar</button>
        </div>
    )
}

export default ItemCount;