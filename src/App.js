import React from "react"
import "./Styles.css"
import NavBar from "./Components/NavBar"
import ItemListContainer from "./Components/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer"
import {BrowserRouter, Route} from "react-router-dom"
import Cart from "./Components/Cart"
import CustomProvider from "./Components/CartContext"
import Formulario from "./Components/Formulario"
import { Mensaje } from "./Components/MensajeFinal"


const App = ()=>{
    
    return(
        <CustomProvider>
            <BrowserRouter>
                <NavBar/>
                <Route path="/" exact>  <ItemListContainer/>  </Route>
                <Route path="/category/:id" exact>  <ItemListContainer/>  </Route>
                <Route path="/item/:id" exact>   <ItemDetailContainer/>   </Route>
                <Route path="/cart" exact>   <Cart/>   </Route>
                <Route path="/formulario" exact>   <Formulario/>   </Route>
                <Route path="/mensaje" exact>   <Mensaje/>   </Route>

            </BrowserRouter>
        </CustomProvider>
    )
}
export default App