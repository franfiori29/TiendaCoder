import React from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
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
