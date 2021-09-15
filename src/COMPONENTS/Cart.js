import { contexto } from "./CartContext"
import { useContext} from "react"
import CartUnit from "./CartUnit"
import { Link } from "react-router-dom"
const Cart = ()=>{
    const {itemBox, clear, totalPagar}=useContext(contexto)
    
    
    if(totalPagar == 0){
        return(
            <div id="divCarrito">
                <h1>Carrito</h1>
                <p>Lo sentimos, el carrito de compras esta vacio</p>
                <Link to="/">
                     <button id="volverMenu">Volver al menu</button>
                </Link>
            </div>
        )
    }
    else{
        return (
            <>
                <h1>Carrito</h1>
                <div>
                    {itemBox.filter(e=>e.item).map(eachUnit=>{
                        return <CartUnit eachUnit={eachUnit} />
                    })}
                </div>
                <p>El total a pagar es ${totalPagar}</p>
                <button onClick={clear}>Vaciar carrito</button>
                <Link to="/formulario"> 
                    <button>Comprar</button>
                </Link>
            </>
        )
    }
}
export default Cart
