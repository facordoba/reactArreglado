import { contexto } from "./CartContext"
import { useContext } from "react"
import CartUnit from "./CartUnit"
const Cart = ()=>{
    const {itemBox, clear, totalPagar}=useContext(contexto)
    /* console.log('se cargo Cart.js') */
    console.log(itemBox)
    if(totalPagar == 0){
        return(
            <>
                <h1>Carrito</h1>
                <h3>El carrito esta vacio</h3>
            </>
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
            </>
        )
    }
}
export default Cart
