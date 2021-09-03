import { contexto } from "./CartContext"
import { useContext } from "react"
import CartUnit from "./CartUnit"
const Cart = ()=>{
    const {itemBox}=useContext(contexto)
    console.log('se cargo Cart.js')
    //console.log(itemBox)
    
    return (
        <>
            <h1>Este es el cart</h1>
            <div>
                {itemBox.filter(e=>e.item).map(eachUnit=>{
                    return <CartUnit eachUnit={eachUnit} />
                })}
            </div>
        </>
    )
}
export default Cart
