import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';

function App() {

  return (
    <>
      <CartProvider defaultCart={[]}>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <ItemListContainer title={"El placer de conducir"} />
            </Route>
            <Route exact path='/categoria/:cat'>
              <ItemListContainer title={"El placer de conducir"} />
            </Route>
            <Route exact path='/item/:id/'>
              <ItemDetailContainer />
            </Route>
            <Route exact path='/carrito'>
              <Cart />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
