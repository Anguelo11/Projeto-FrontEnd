
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import SearchField from "./SearchField";
import { Button } from 'primereact/button';


const Header = () => {
    return(
       <div style={{background: '#FFFFFF'}}
       className="shadow-5 flex align-items-center 
        h-9rem p-3 gap-5 flex-wrap">

        <Logo/>
        <SearchField/>

        <Link
        className="w-9rem flex justify-content-center"
        style={{color: '#474747', fontSize: '16px'}}
        to={"/Login"}>Cadastre-se</Link>
        
        <Link to={"/Logon"}>
            <Button
            
                style={{width: '114px', height: '40px',borderRadius: '4px', fontSize: '14px', color: 'white', fontWeight: 'bold'}} label="Entrar" />        
        </Link>
        
        <img 
        className="pl-4"
        src="src/assets/assets/mini-cart.svg" alt="carrinho de compras" />

        <NavLink to="/" style={({ isActive }) => ({
            color: isActive ? '#C92071' : '#474747',
            fontWeight: isActive ? 'bold' : 'normal'
        })}>
        Home
        </NavLink>

        <NavLink to="/produtos" style={({ isActive }) => ({
            color: isActive ? '#C92071' : '#474747',
            fontWeight: isActive ? 'bold' : 'normal'
        })}>
        Produtos
        </NavLink>

        <NavLink to="/categorias" style={({ isActive }) => ({
            color: isActive ? '#C92071' : '#474747',
            fontWeight: isActive ? 'bold' : 'normal'
        })}>
        Categorias
        </NavLink>

        <NavLink to="/pedidos" style={({ isActive }) => ({
            color: isActive ? '#C92071' :'#474747',
            fontWeight: isActive ? 'bold' : 'normal'
        })}>
        Pedidos
        </NavLink>
       </div>
       
    )
}

export default Header