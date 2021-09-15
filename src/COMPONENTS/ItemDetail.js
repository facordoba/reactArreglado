import { useState, useContext } from "react"
import Counter from "./Counter"
import { Link } from "react-router-dom"
import { contexto } from "./CartContext"
const ItemDetail = ({itemDetail})=>{
    const [cantidad, setCantidad]=useState()
    const { addItem } = useContext(contexto)
    
    const onAdd =(cantidad)=>{
        setCantidad(cantidad)
        const data = {item: itemDetail, quantity: cantidad}
        addItem(data)
    }
    if(cantidad == undefined){

        return (
            <div id="itemDetail">
                <p>Descripcion: {itemDetail.description}</p>
                <p>Precio: ${itemDetail.price}</p>
                <Counter initial={0} stock={itemDetail.stock} onAdd={onAdd}/>
            </div>
        )
    }
    else{
        return (
            <div id="itemDetail">
                <p>Descripcion: {itemDetail.description}</p>
                <p>Precio: ${itemDetail.price}</p>
                <Link to="/">   <button id="volverMenu">Volver al menu</button>   </Link>
            </div>
        )

    }
}
export default ItemDetail