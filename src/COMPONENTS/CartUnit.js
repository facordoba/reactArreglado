
const CartUnit = ({eachUnit, onDelete})=>{
    
    console.log(eachUnit)
    const startUp = ()=>{
        console.log(eachUnit.item.id)
        onDelete(eachUnit.item.id)
    }
    return (
        <div id="cartUnitDiv">
            <p>Producto: {eachUnit.item.title}</p>
            <p>Precio: {eachUnit.item.price}</p>
            <p>Cantidad: {eachUnit.quantity}</p>
            <button onClick={startUp} >Borrar</button>
        </div>
    )
}
export default CartUnit