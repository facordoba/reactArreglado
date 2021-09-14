import { contexto } from "./CartContext"
import { useContext } from "react"
import CartUnit from "./CartUnit"
import { firestore } from "../firebase"

const Cart = ()=>{
    const {itemBox, clear, totalPagar}=useContext(contexto)
    const terminar = ()=>{

        const db = firestore
        const collection = db.collection("ordenes")
        const usuario = {nombre: "Facundo", apellido: "Cordoba", email:"fcordoba@test.com", tel:1145547680}
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
                console.log(r)
            })
        
    }
    if(totalPagar == 0){
        return(
            <>
                <h1>Carrito</h1>
                <h3>El carrito esta vacio</h3>
            </>
        )
    }
    else{
        return (
            <>
                <h1>Carrito</h1>
                <div>
                    {itemBox.filter(e=>e.item).map(eachUnit=>{
                        return <CartUnit eachUnit={eachUnit} />
                    })}
                </div>
                <p>El total a pagar es ${totalPagar}</p>
                <button onClick={clear}>Vaciar carrito</button>
                <button onClick={terminar}>Comprar</button>
            </>
        )
    }
}
export default Cart
