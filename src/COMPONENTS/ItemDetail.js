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
            <div>
                <p>Descripcion: {itemDetail.description}</p>
                <p>Precio: {itemDetail.price}</p>
                <Counter initial={0} stock={itemDetail.stock} onAdd={onAdd}/>
            </div>
        )
    }
    else{
        return (
            <div>
                <p>Descripcion: {itemDetail.description}</p>
                <p>Precio: {itemDetail.price}</p>
                <Link to="/cart">   <button>Agregar al carrito</button>   </Link>
                
            </div>
        )

    }
}
export default ItemDetail