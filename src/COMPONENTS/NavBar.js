import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
const NavBar = ()=>{
    
    return(
        <header>
            <nav>
                <Link to="/">   <h1>Mi E-Commerce</h1>   </Link>
                <Link to="/category/1">   <h4>Cotidianos</h4>   </Link>
                <Link to="/category/2">   <h4>Lujosos</h4>   </Link>
                <CartWidget/>
            </nav>
        </header>
    )
}
export default NavBar