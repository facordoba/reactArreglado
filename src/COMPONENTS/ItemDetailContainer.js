import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router"
import { firestore } from "../firebase"

const ItemDetailContainer = ()=>{
    const params = useParams()
    const [itemDetail, setItemDetail] = useState([])
    const db = firestore
    const collection = db.collection( "itemColection" )
    useEffect(()=>{
        const filtro = collection.doc(`${params.id}`)
            const query = filtro.get()
            query.then((resultado)=>{
                    const data = resultado.data()
                setItemDetail(data)
            })
        },[params.id])
    return (<div>
        <ItemDetail itemDetail={itemDetail}/>
    </div>)
}
export default ItemDetailContainer