import Item from "./Item"
const ItemList = ({propItem})=>{
    
    return(
        <div id="itemBox">
            {propItem.map(itemIterado=>{
                    return <Item item={itemIterado}/>
                })}
        </div>
    )
}
export default ItemList