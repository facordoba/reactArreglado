import { Link } from "react-router-dom"
import { useContext } from "react"
import { contexto } from "./CartContext"
const Formulario = ()=>{
    const {usuario, setUsuario}=useContext(contexto)
    const nombreF = (e)=>{
        setUsuario({...usuario,nombre:e.target.value})
    }
    const apellidoF = (e)=>{
        setUsuario({ ...usuario, apellido: e.target.value})
    }
    const emailF = (e)=>{
        setUsuario({ ...usuario, email: e.target.value})
    }
    const telefonoF = (e)=>{
        setUsuario({ ...usuario, telefono: e.target.value})
    }
   
    return(
        <div id="divForm">
            <form>
                <div id="nombre">
                    <label>Nombre</label>
                    <input onChange={nombreF}></input>     
                </div>
                <div id="apellido">
                    <label>Apellido</label>
                    <input onChange={apellidoF}></input>     
                </div>
                <div id="email">
                    <label>Email</label>
                    <input onChange={emailF}></input>     
                </div>
                <div id="telefono">
                    <label>Telefono</label>
                    <input onChange={telefonoF}></input>     
                </div>
                <div id="direccion">
                    <label>Direccion</label>
                    <input></input>     
                </div>
                <div id="provincia">
                    <label>Provincia</label>
                    <input></input>     
                </div>
                <div id="ciudad">
                    <label>Cuidad</label>
                    <input></input>     
                </div>
                <div id="codigo">
                    <label>Codigo Postal</label>
                    <input></input>     
                </div>
                <Link id="botonTerminado" to="/mensaje">
                        <button>Formulario terminado</button>
                </Link>
            </form>
        </div>
    )
}
export default Formulario