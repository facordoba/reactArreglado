import { useState} from "react"
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
    const stateUp = ()=>{
        onAdd(number)
    }
    return (
        <div id="counter">
            <div id="buttons">
                <button onClick={add}>+</button>
                <p>{number}</p>
                <button onClick={remove}>-</button>
            </div>
            <button id="saveButton" onClick={stateUp}>Agregar al carrito</button>
        </div>
        
    )
}
export default Counter