import { Link } from "react-router-dom"
const NavBar = ()=>{
    
    return(
        <nav>
            <p>Icono</p>
            <Link to="/">   <h1>Mi E-Commerce</h1>   </Link>
            <Link to="/category/1">   <h4>Categoria 1</h4>   </Link>
            <Link to="/category/2">   <h4>Categoria 2</h4>   </Link>
            <p>logoCarrito</p>
        </nav>
    )
}
export default NavBar