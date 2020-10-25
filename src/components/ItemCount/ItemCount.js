import React, { useState } from 'react'
import './ItemCount.css'

function ItemCount({ stock, initial, onAdd }) {
    const [toAdd, setToAdd] = useState(initial);

    function handleClick(e) {
        if (e.target.id === "subtract") {
            setToAdd(toAdd === 1 ? 1 : toAdd - 1)
        } else {
            setToAdd(toAdd + 1)
        }
    }

    return (
        <div className="itemCount">
            <span className="disponibility" >{stock} disponibles!</span>
            <div className="itemController">
                <button id="subtract" onClick={handleClick}> - </button>
                <span> {toAdd} </span>
                <button onClick={handleClick} id="add"> + </button>
            </div>
            <button onClick={() => onAdd(toAdd)}>Agregar</button>
        </div>
    )
}

export default ItemCount;