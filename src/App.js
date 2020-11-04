import React from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {

  return (
    <>
      <NavBar />
      <ItemDetailContainer />
      {/* <ItemListContainer title={"El placer de conducir"} /> */}
    </>
  );
}

export default App;
