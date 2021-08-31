import { useParams } from "react-router"
import { useState, useContext } from "react"
import Counter from "./Counter"
import { Link } from "react-router-dom"
import {contexto} from "./CartContext"
const ItemDetail = ({itemDetail})=>{
    const params = useParams()
    const [cantidad, setCantidad]=useState()



    const {addItem} = useContext(contexto)

    const onAdd =(cantidad)=>{
        const data = {
            item : itemDetail,
            quantity : cantidad
        }
        addItem(data)
        setCantidad(cantidad)
    }
    if(cantidad == undefined){

        return (
            <div>
                <p>id: {itemDetail.id}</p>
                <p>description: {itemDetail.description}</p>
                <p>price: {itemDetail.price}</p>
                <Counter initial={0} stock={itemDetail.stock} onAdd={onAdd}/>
            </div>
        )
    }
    else{
        return (
            <div>
                <p>id: {itemDetail.id}</p>
                <p>description: {itemDetail.description}</p>
                <p>price: {itemDetail.price}</p>
                <Link to="/cart">   <button onClick={addItem}>Terminar mi compra</button>   </Link>
                
            </div>
        )

    }
}
export default ItemDetail