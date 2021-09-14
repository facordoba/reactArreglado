import { useContext } from "react"
import { contexto } from "./CartContext"
const CartUnit = ({eachUnit})=>{
    const {removeItem}=useContext(contexto)

    const onDelete = ()=>{
        removeItem(eachUnit.item.id)
    }
    return (
        <div id="cartUnitDiv">
            <p>Producto: {eachUnit.item.title}</p>
            <p>Precio: {eachUnit.item.price}</p>
            <p>Cantidad: {eachUnit.quantity}</p>
            <button onClick={onDelete}>Borrar</button>
        </div>
    )
}
export default CartUnit