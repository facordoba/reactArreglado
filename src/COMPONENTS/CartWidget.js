import { Link } from "react-router-dom"
import { contexto } from "./CartContext"
import { useContext } from "react"
const CartWidget = ()=>{
    const {agregados}=useContext(contexto)
    if(agregados == 0 ){
        return (
            <Link to="/cart">
            <button id="buttonCarrito">Carrito</button>
            </Link>
        )
    }
    else{
        return (
            <Link to="/cart">
            <button id="buttonCarrito">Items: {agregados}</button>
            </Link>
        )
    }
}
export default CartWidget