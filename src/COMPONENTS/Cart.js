import { contexto } from "./CartContext"
import { useContext} from "react"
import CartUnit from "./CartUnit"
const Cart = ()=>{
    const {itemBox ,removeItem}=useContext(contexto)
    console.log('se cargo Cart.js')
    console.log(itemBox)

    const onDelete = (idDelete)=>{
        const withoutItem = itemBox.filter(e=>e.item).filter(e=>e.item.id != idDelete)
        console.log(withoutItem)
        removeItem(withoutItem)
    }
    return (
        <>
            <h1>Este es el cart</h1>
            <div>
                {itemBox.filter(e=>e.item).map(eachUnit=>{
                    return <CartUnit eachUnit={eachUnit} onDelete={onDelete}/>
                })}
            </div>
        </>
    )
}
export default Cart
