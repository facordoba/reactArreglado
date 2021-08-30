import Item from "./Item"
const ItemList = ({propItem})=>{
    
    return(
        <div id="itemBox">
            {propItem.map(itemIterado=>{
                    /* console.log("como llega el prop 'propItem'"+ propItem) */
                    return <Item item={itemIterado}/>
                })}
        </div>
    )
}
export default ItemList