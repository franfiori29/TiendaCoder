import React, { useState, useEffect } from 'react'
import './ItemCount.css'

function ItemCount(props) {

    const [toAdd, setToAdd] = useState(props.initial);

    useEffect(() => {
        setToAdd(props.initial)
    }, [props])

    function handleClick(e) {
        if (e.target.id === "subtract") {
            setToAdd(toAdd === props.initial ? props.initial : toAdd - 1)
        } else {
            setToAdd(toAdd >= props.stock ? props.stock : toAdd + 1)
        }
    }

    return (
        <div className="itemCount">
            <span className="disponibility" >{props.stock} disponibles!</span>
            <div className="itemController">
                <button id="subtract" onClick={handleClick}> - </button>
                <span> {toAdd} </span>
                <button onClick={handleClick} id="add"> + </button>
            </div>
            <button onClick={() => props.onAdd(toAdd)}>Agregar</button>
        </div>
    )
}

export default ItemCount;