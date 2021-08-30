import {useState} from "react"
const PruebaMuestra = ({muestra})=>{
    const [number, setNumber] = useState(0)
    const [numberAcept, setNumberAcept]=useState(0)
    const add = ()=>{
        if(number >= 20){
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
    const reset = ()=>{
        setNumber(0)
    }
    const acept = ()=>{setNumberAcept(number)}
    return (
        <div id="counter">
            <div id="buttons">
                <button onClick={add}>Sumar</button>
                <p>{number}</p>
                <button onClick={remove}>Restar</button>
            </div>
            <button id="saveButton" onClick={reset}>Resetaer</button>
            <button id="saveButton" onClick={acept}>Aceptar</button>
            <p>title: {muestra[numberAcept].title}</p>
            <p>email: {muestra[numberAcept].email}</p>
            <p>date: {muestra[numberAcept].date}</p>
        </div>
    )
}
export default PruebaMuestra