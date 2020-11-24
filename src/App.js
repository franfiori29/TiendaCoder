import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import 'semantic-ui-css/semantic.min.css'


function App() {

  return (
    <>
      <CartProvider defaultCart={[]}>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <ItemListContainer title={"EL PLACER DE CONDUCIR"} />
            </Route>
            <Route exact path='/categoria/:cat'>
              <ItemListContainer />
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
