import React, { useState } from "react"
import "./Styles.css"
import NavBar from "./COMPONENTS/NavBar"
import ItemListContainer from "./COMPONENTS/ItemListContainer"
import Counter from "./COMPONENTS/Counter"
import Prueba from "./COMPONENTS/Prueba"
import PruebaState from "./COMPONENTS/PruebaState"
import ItemDetailContainer from "./COMPONENTS/ItemDetailContainer"
import {BrowserRouter, Route} from "react-router-dom"
import Cart from "./COMPONENTS/Cart"


const App = ()=>{

    return(
        <BrowserRouter>
            <NavBar/>
            <Route path="/" exact>  <ItemListContainer/>  </Route>
            <Route path="/category/:id" exact>  <ItemListContainer/>  </Route>
            <Route path="/item/:id" exact>   <ItemDetailContainer/>   </Route>
            <Route path="/cart" exact>   <Cart/>   </Route>

        </BrowserRouter>
    )
}
export default App