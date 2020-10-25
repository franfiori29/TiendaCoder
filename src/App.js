import React from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";

function App() {

  let stock = 10;

  function handleAdd(toAdd) {
    toAdd > stock ? alert("NO HAY STOCK") : alert("Tenemos el stock solicitado")
  }

  return (
    <>
      <NavBar />
      <ItemListContainer title={"El placer de conducir"} />
      <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
    </>
  );
}

export default App;
