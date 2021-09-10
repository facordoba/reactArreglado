import mock from "../mock.json"
import { useState, useEffect } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router"
const ItemListContainer = ()=>{

    const params = useParams()
    const [item, setItem]=useState([])
    useEffect(()=>{
        const promise = new Promise(  (resolve, reject)=>{
            setTimeout(() => {
                resolve(mock)
            }, 2000);
        }  )
        if(params.id == undefined){
            promise.then(p=>setItem(p))
        }
        else if(params.id == 1){
            promise.then(p=>setItem(p.filter(e=>e.category == 1)))
        }
        else if(params.id == 2){
            promise.then(p=>setItem(p.filter(e=>e.category == 2)))
        }
    },[params.id])
    sessionStorage.clear()
    return (
        <div>
            <ItemList propItem={item}/>
        </div>
    )
}
export default ItemListContainer
