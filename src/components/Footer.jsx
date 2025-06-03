import Logo from "./Logo"
import Informacoes from "./Informacoes"
import { NavLink } from "react-router-dom"

const Footer = () => {
  return (
    <footer
      style={{ background: '#1F1F1F' }}
      className="text-white w-full"
    >

      <div className="flex flex-column md:flex-row flex-wrap gap-6 p-6">

        <div className="flex flex-column gap-3 p-3 md:w-30rem w-full">
          <Logo />

          <div className="mt-2 text-sm line-height-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere omnis suscipit...
          </div>

          <div className="flex gap-4 mt-4">

            <NavLink 
            to="https://www.facebook.com/digitalcollegealdeota"
            >
              <img className="w-1rem" src="/src/assets/assets/facebook.svg" alt="facebook" />
            </NavLink>

            <NavLink 
            to="https://www.instagram.com/digitalcollegebr/"
            >
              <img className="w-2rem" src="/src/assets/assets/instagram.svg" alt="facebook" />
            </NavLink>

            <NavLink 
            to="https://x.com/eaicollegers"
            >
              <img className="w-2rem mt-1" src="/src/assets/assets/twitter.svg" alt="facebook" />
            </NavLink>


          </div>
        </div>

        <div className="p-3 w-full md:w-20rem">
          <Informacoes
            title="Institucional"
            informations={[
              { text: "Sobre Drip Store", link: "/about" },
              { text: "Segurança", link: "/seguranca" },
              { text: "Wishlist", link: "/wishlist" },
              { text: "Blog", link: "/blog" },
              { text: "Trabalhe conosco", link: "/trabalhe" },
              { text: "Meus Pedidos", link: "/meusPedidos" },
            ]}
          />
        </div>

        <div className="p-3 w-full md:w-20rem">
          <Informacoes
            title="Categorias"
            informations={[
              { text: "Camisetas", link: "/camisetas" },
              { text: "Calças", link: "/calcas" },
              { text: "Bonés", link: "/bones" },
              { text: "Headphones", link: "/headphones" },
              { text: "Tênis", link: "/tenis" },
            ]}
          />
        </div>

        <div className="p-3 w-full md:flex-1">
          <Informacoes
            title="Contato"
            informations={[
              {
                text: "Av. Santos Dumont, 1520 - 1º andar - Aldeota, Fortaleza - CE, 60150-161",
                link: "/localizacao"
              },
              { text: "(85) 3051-3411", link: "/telefone" }
            ]}
          />
        </div>
      </div>

      <hr className="mx-6 border-white-alpha-30" />
      <p className="flex justify-content-center text-white text-xs py-3">
        © 2024 Digital Store
      </p>
    </footer>
  )
}

export default Footer
