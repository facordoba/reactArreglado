import { useParams } from "react-router"
import { useState, useContext,useEffect } from "react"
import Counter from "./Counter"
import { Link } from "react-router-dom"
import {contexto} from "./CartContext"
const ItemDetail = ({itemDetail})=>{
    const params = useParams()
    const [cantidad, setCantidad]=useState()
    const {addItem} = useContext(contexto)
    
    const onAdd =(cantidad)=>{
        setCantidad(cantidad)
        const data = {item: itemDetail, quantity: cantidad}
        addItem(data)
        
        //console.log(itemBox) // Esta vacio dps del click, es como que esta un paso atras
        
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
                <Link to="/cart">   <button>Terminar mi compra</button>   </Link>
                
            </div>
        )

    }
}
export default ItemDetail