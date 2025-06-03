import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import SearchField from "./SearchField";
import { Button } from "primereact/button";

const Header = () => {
  return (
    <div className="w-full shadow-5 p-4" style={{ background: "#FFFFFF" }}>
      

      <div className="flex flex-wrap align-items-center justify-content-between gap-4">
        

        <div className="flex align-items-center">
          <Logo />
        </div>

        {/* Barra de pesquisa */}
        <div className="flex-grow-1 flex justify-content-center">
          <SearchField />
        </div>

        {/* Botões de login/cadastro */}
        <div className="flex align-items-center gap-6">
          <Link
            style={{ color: "#474747", fontSize: "16px" }}
            to="/Login"
          >
            Cadastre-se
          </Link>

          <Link to="/Logon">
            <Button
              style={{
                width: "114px",
                height: "40px",
                borderRadius: "4px",
                fontSize: "14px",
                backgroundColor: "#C92071",
                color: "white",
                fontWeight: "bold",
              }}
              label="Entrar"
            />
          </Link>
        </div>

        {/* Carrinho */}
        <div className="flex align-items-center">
          <img
            className="p-2"
            src="/src/assets/assets/mini-cart.svg"
            alt="carrinho de compras"
          />
        </div>
      </div>

      {/* Linha de navegação abaixo */}
      <div className="flex gap-4 mt-3 flex-wrap">
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#C92071" : "#474747",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Home
        </NavLink>

        <NavLink
          to="/produtos"
          style={({ isActive }) => ({
            color: isActive ? "#C92071" : "#474747",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Produtos
        </NavLink>

        <NavLink
          to="/categorias"
          style={({ isActive }) => ({
            color: isActive ? "#C92071" : "#474747",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Categorias
        </NavLink>

        <NavLink
          to="/pedidos"
          style={({ isActive }) => ({
            color: isActive ? "#C92071" : "#474747",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Pedidos
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
