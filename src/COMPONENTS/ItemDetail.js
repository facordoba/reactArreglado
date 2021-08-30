import { useParams } from "react-router"
import { useState } from "react"
import Counter from "./Counter"
import { Link } from "react-router-dom"
const ItemDetail = ({itemDetail})=>{
    const params = useParams()
    const [onAddValue, setOnAddValue]=useState()
    console.log(params.id)
    const onAdd =(cantidad)=>{
        setOnAddValue(cantidad)
    }
    if(onAddValue == undefined){

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