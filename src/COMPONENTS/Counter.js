import { useState } from "react";
import Prueba from "./Prueba";
const Counter = ({initial, stock, onAdd})=>{
    const [number, setNumber] = useState(initial)

    const add = ()=>{
        if(number >= stock){
            setNumber(number)
        }
        else{
            setNumber(number + 1)
        }
    }
    const remove = ()=>{
        if(number <= 0){
            setNumber(number)
        }
        else{
            setNumber(number - 1)
        }
    }
    
    return (
        <div id="counter">
            <div id="buttons">
                <button onClick={add}>Sumar</button>
                <p>{number}</p>
                <button onClick={remove}>Restar</button>
            </div>
            <button id="saveButton" onClick={onAdd}>Guardar</button>
        </div>
        
    )
}
export default Counter