import mock from "../mock.json"
import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router"
const ItemDetailContainer = ()=>{
    const params = useParams()
    const [item, setItem]=useState([])
    useEffect(()=>{
        const promise = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(mock)
            },(2000))
        })
        promise.then(b=>setItem(b.find(e=>e.id==params.id)))
    },[params.id])
    return (<div>
        <ItemDetail itemDetail={item}/>
    </div>)
}
export default ItemDetailContainer