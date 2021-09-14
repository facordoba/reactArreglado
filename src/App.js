import React from "react"
import "./Styles.css"
import NavBar from "./COMPONENTS/NavBar"
import ItemListContainer from "./COMPONENTS/ItemListContainer"
import Counter from "./COMPONENTS/Counter"
import ItemDetailContainer from "./COMPONENTS/ItemDetailContainer"
import {BrowserRouter, Route} from "react-router-dom"
import Cart from "./COMPONENTS/Cart"
import CustomProvider from "./COMPONENTS/CartContext"



const App = ()=>{
    
    return(
        <CustomProvider>

            <BrowserRouter>
                <NavBar/>
                <Route path="/" exact>  <ItemListContainer/>  </Route>
                <Route path="/category/:id" exact>  <ItemListContainer/>  </Route>
                <Route path="/item/:id" exact>   <ItemDetailContainer/>   </Route>
                <Route path="/cart" exact>   <Cart/>   </Route>

            </BrowserRouter>
        </CustomProvider>
    )
}
export default App