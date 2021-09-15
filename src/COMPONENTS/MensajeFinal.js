import { useContext, useEffect } from "react"
import { contexto } from "./CartContext"
export const Mensaje =()=>{
    const {idF,clear, terminar}=useContext(contexto)
    useEffect(()=>{
        terminar()
    },[])
    useEffect(()=>{
        clear()
    },[idF])
    if(idF == 0){
        return(
            <div>
                <h2>Se esta finalizado su compra</h2>
            </div>
        )
    }
    else{
        return(
            <div id="cartelFinalizacion">
                <div>
                    <h2>Su compra se ha efectuado correctamente</h2>
                    <h3>El ID de su compra es : {idF}</h3>
                </div>
            </div>
        )
    }
}