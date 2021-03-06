import { createContext, useState } from "react";
import {firestore} from "../firebase"
export const contexto = createContext()
export const {Customer, Provider} = contexto
const CustomProvider = ({children})=>{
    const [usuario, setUsuario]=useState({})
    const [idF, setIdF]=useState(0)
    const [item, setItem] = useState([])
    const [totalPagar, setTotalPagar]=useState(0)
    const [agregados, setAgregados]= useState(0)
    const [itemBox, setItemBox]=useState(()=>JSON.parse(window.sessionStorage.getItem("cart")) || [])
    
    const addItem = (data)=>{
        const found = itemBox.find(element => element.item.id == data.item.id)
        if (found) {
            const carroViejo = itemBox.map(element => {
                if (element.item.id == data.item.id) {
                    return { item: data.item, quantity: data.quantity + element.quantity }
                } 
                return element
            })
            setItemBox(carroViejo)
            setAgregados(agregados + data.quantity)
            setTotalPagar(totalPagar + (data.item.price * data.quantity))
            window.sessionStorage.setItem("cart", JSON.stringify(carroViejo))
            }
        else{
                const carro = [...itemBox, data]
                setItemBox ([...itemBox, data])
                setAgregados(agregados+data.quantity)
                setTotalPagar(totalPagar+(data.quantity * data.item.price))
                window.sessionStorage.setItem("cart", JSON.stringify(carro))
            }
    }

    const removeItem = (idDelete)=>{
        const withoutItem = itemBox.filter(e=>e.item.id != idDelete) 
        setItemBox([...withoutItem]) 
        const itemBorrar = itemBox.find(e=>e.item.id == idDelete)
        setAgregados(agregados-itemBorrar.quantity) 
        setTotalPagar(totalPagar - (itemBorrar.item.price * itemBorrar.quantity))
    }
    
    const clear = ()=>{
        setItemBox([])
        setAgregados(0)
        setTotalPagar(0)
        setUsuario("")
        const carroVacio = []
        window.sessionStorage.setItem("cart", JSON.stringify(carroVacio))
    }
    
    const terminar = ()=>{
        const db = firestore
        const collection = db.collection("ordenes")
        const cartMapeado = itemBox.map(e=>{
            if(e){
                return {id: e.item.id, title: e.item.title, price: e.item.price}
            }
        })
            const query = collection.add({
                                    buyer: usuario, 
                                    items:cartMapeado, 
                                    date: "9/14/21", 
                                    total: totalPagar})
            query.then(r=>{
                setIdF(r.id)
            })
    }

    const valueProvider={itemBox, 
                        agregados, 
                        totalPagar, 
                        addItem, 
                        removeItem, 
                        clear, 
                        item, 
                        setItem, 
                        idF, 
                        setIdF, 
                        terminar, 
                        usuario, 
                        setUsuario
                        }
    return(
        <div>
            <Provider value={valueProvider}>
                {children}
            </Provider>
        </div>
    )
}
export default CustomProvider