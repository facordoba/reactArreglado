import { createContext, useState } from "react";
export const contexto = createContext()
export const {Customer, Provider} = contexto
const CustomProvider = ({children})=>{
    const [totalPagar, setTotalPagar]=useState(0)
    const [agregados, setAgregados]= useState(0)
    const [itemBox, setItemBox]=useState(()=>JSON.parse(window.sessionStorage.getItem("cart")) || [])
    console.log("sessionStorage:" + itemBox)
    const addItem = (data)=>{
        const found = itemBox.find(element => element.item.id == data.item.id)
        
        console.log(found)
        if (found) {
            const carroViejo = itemBox.map(element => {
                if (element.item.id == data.item.id) {
                    return { item: data.item, quantity: data.quantity + element.quantity }
                } 
                return element
            })
            console.log(carroViejo)
            setItemBox(carroViejo)
            setAgregados(agregados + data.quantity)
            setTotalPagar(totalPagar + (data.item.price * data.quantity))
            window.sessionStorage.setItem("cart", JSON.stringify(carroViejo))
            /* console.log(found) */
    }
    
    else{
        const carro = [...itemBox, data]
        /*  console.log("array" + carro); */
        setItemBox ([...itemBox, data])
        setAgregados(agregados+data.quantity)
        setTotalPagar(totalPagar+(data.quantity * data.item.price))
        window.sessionStorage.setItem("cart", JSON.stringify(carro))
    }
    
    /* console.log('como esta itembox')
    console.log(itemBox) */
    }

    const removeItem = (idDelete)=>{
        const withoutItem = itemBox.filter(e=>e.item.id != idDelete) 
        setItemBox([...withoutItem]) 
        const itemBorrar = itemBox.find(e=>e.item.id == idDelete)
        console.log(itemBorrar)
        setAgregados(agregados-itemBorrar.quantity) 
        setTotalPagar(totalPagar - (itemBorrar.item.price * itemBorrar.quantity))
    }
    
    const clear = ()=>{
        setItemBox([])
        setAgregados(0)
        setTotalPagar(0)
        const carroVacio = []
        window.sessionStorage.setItem("cart", JSON.stringify(carroVacio))
    }
    const isInCart = ()=>{}

    const valueProvider={itemBox, agregados, totalPagar, addItem, removeItem, clear}
    return(
        <div>
            <Provider value={valueProvider}>
                {children}
            </Provider>
        </div>
    )
}
export default CustomProvider