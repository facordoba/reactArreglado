import { Link } from "react-router-dom"
import { contexto } from "./CartContext"
import { useContext } from "react"
const CartWidget = ()=>{
    const {agregados}=useContext(contexto)
    if(agregados == 0 ){
        return (
            <Link to="/cart"><p>Carrito</p></Link>
        )
    }
    else{
        return (
            <Link to="/cart">
            <div>
                <p>Items en el carrito {agregados}</p>
            </div>
            </Link>
        )
    }
}
export default CartWidget