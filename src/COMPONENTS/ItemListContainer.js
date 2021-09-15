import { useEffect, useContext } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router"
import { firestore } from "../firebase" 
import { contexto } from "./CartContext"

const ItemListContainer = ()=>{

    const params = useParams()
    const { item, setItem } = useContext(contexto)
    useEffect(()=>{
        const db = firestore
        const collection = db.collection( "itemColection" )
        
        if(params.id == 1){
            const filtro = collection.where("category","==",1)
            const query = filtro.get()
            query.then((resultados)=>{
                const resultadoss = []
                resultados.forEach(element => {
                    const data = element.data( )
                    const idF = element.id
                    const data_final = {idF,...data}
                    resultadoss.push(data_final)
                })
                setItem(resultadoss)
    
            })
        }
        else if(params.id == 2){
            const filtro = collection.where("category","==",2)
            const query = filtro.get()
            query.then((resultados)=>{
                const resultadoss = []
                resultados.forEach(element => {
                    const data = element.data( )
                    const idF = element.id
                    const data_final = {idF,...data}
                    resultadoss.push(data_final)
                })
                setItem(resultadoss)
    
            })
        }
        else{

            const query = collection.get()
            query.then((resultados)=>{
                const resultadoss = []
                resultados.forEach(element => {
                    const data = element.data( )
                    const idF = element.id
                    const data_final = {idF,...data}
                    resultadoss.push(data_final)
                })
                setItem(resultadoss)
    
            })
        }
    },[params.id])
    
    return (
        <div id="itemContainer">
            <ItemList propItem={item}/>
        </div>
    )
}
export default ItemListContainer
