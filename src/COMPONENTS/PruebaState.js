import Prueba from "./Prueba"
import { useState } from "react"
const PruebaState = ()=>{

    const [word, setWord]=useState()
    const products = ()=>{setWord('products')}
    const carts = ()=>{setWord('carts')}
    const users = ()=>{setWord('users')}
    return(
        <>
            <button onClick={products}>products</button>
            <button onClick={carts}>carts</button>
            <button onClick={users}>users</button>
            <h2>{word}</h2>
            <Prueba prop1={word}/>
        </>
    );
}
export default PruebaState