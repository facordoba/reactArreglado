import { useEffect,useState } from "react"
import PruebaMuestra from "./PruebaMuestra"
const Prueba = ({prop1})=>{
    /* const[prop, setProp]=useState(prop1)
    setProp(prop1) */   //Esto aca no va porque hace infinitos loops

    const [resolveI, setResolveI]=useState([{title: "", email: "", date: ""}])


    useEffect(()=>{

        console.log(`Se reejecuto 'Prueba' en ${prop1}`)
        
        const promesa = new Promise (  (resolve, eject)=>{
            setTimeout(()=>{
                fetch(`https://fakestoreapi.com/${prop1}`)
                    .then(res=>res.json())
                    .then(json=>resolve(json))
            },[2000])
            
        } )
        promesa.then(a=>{console.log(a)
        setResolveI(a)})
    },[prop1])

    console.log("esto es el state resolve" + resolveI)
    return (
        <>
            <p>Esto es el componente de prueba</p>
            <PruebaMuestra muestra={resolveI}/>
        </>
    )
}
export default Prueba