import { createContext, useState, useEffect } from "react";
export const contexto = createContext()
export const {Customer, Provider} = contexto

const CustomProvider = ({children})=>{
    const [itemBox, setItemBox]=useState([])

    const addItem = (data)=>{
       setItemBox([...itemBox,data])
    }
    
    const removeItem = (idDelete)=>{
        const withoutItem = itemBox.filter(e=>e.item.id != idDelete)
        setItemBox([...withoutItem])
    }
    
    const clear = ()=>{}
    const isInCart = ()=>{}

    const valueProvider={itemBox, addItem, removeItem}
    return(
        <div>
            <Provider value={valueProvider}>
                {children}
            </Provider>
        </div>
    )
}
export default CustomProvider