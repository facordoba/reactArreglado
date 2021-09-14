import { Link } from "react-router-dom"

const Item = ({item})=>{
    return (
            <div id="item">
                <Link to={`/item/${item.idF}`}>
                    <h3>{item.title}</h3>   
                    <img src={item.pictureURL}/>
                </Link>
            </div>
    )
}
export default Item