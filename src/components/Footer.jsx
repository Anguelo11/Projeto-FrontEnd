import Logo from "./Logo"
import Informacoes from "./Informacoes"

const Footer = () => {
  return (
    <footer
    style={{background: '#1F1F1F'}} 
    className="">
      <div className="text-white flex gap-8 p-6">
              <div className="text-white flex flex-column gap- 3 p-3">
        <Logo/>

        <div className="mt-2 text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere omnis suscipit provident ipsum labore, impedit officia id minima quasi enim dicta nihil error voluptatum commodi nisi quidem saepe quia cupiditate.
        </div>

        <div className="flex gap-5 mt-4">
          <img className="w-1rem" src="src/assets/assets/facebook.svg" alt="" />

          <img className="w-2rem" src="src/assets/assets/instagram.svg" alt="" />

          <img className="w-2rem" src="src/assets/assets/twitter.svg" alt="" />
        </div>
      </div>

 

      <div style={{ width: '320px'}}
      className="p-3 flex">
          <Informacoes
          title="Institucional"
          informations={[
            {text: "Sobre Drip Store", link: "/about"},

            {text: "Segurança", link: "/segurança"},

            {text: "Wishlist", link: "/wishlist"},

            {text: "Blog", link: "/blog"},

            {text: "Trabalhe conosco", link: "/trabalhe"},

            {text: "Meus Pedidos", link: "/meusPedidos"}
          ]}
          />
      </div>

      <div style={{ width: '320px'}}
      className="p-3 flex ">
          <Informacoes
          title="Categorias"
          informations={[
            {text: "Camisetas", link: "/camisetas"},

            {text: "Calças", link: "/calcas"},

            {text: "Bonés", link: "/bones"},

            {text: "Headphones", link: "/headphones"},

            {text: "Tênis", link: "/tenis"}
          ]}
          />
      </div>

      <div style={{ width: '800px'}}
      className="p-3 flex ">
          <Informacoes
          title="Contato"
          informations={[
            {text: "Av. Santos Dumont, 1520 - 1 andar - aldeota, Fortaleza CE, 60150-161", link: "/localização"},

            {text: "(85) 3051-3411", link: "/telefone"}

          ]}
          />
      </div>
    </div>


      <hr />
      <p className="flex justify-content-center text-white text-xs">© 2024 Digital Store</p>

    </footer>
  )
}

export default Footer
