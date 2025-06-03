import Gallery from "../components/Gallery"
import BuyBox from "../components/BuyBox"
import ProductOptions from "../components/ProductOptions"
import ProductListing from "../components/ProductListing"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Section from "../components/Section"


const ProductViewPage = () => {
  const images = [
    {src: "/produc-image-2.jpeg", alt: "Produto 1"},
    {src: "/produc-image-3.jpeg", alt: "Produto 2"},
    {src: "/produc-image-4.jpeg", alt: "Produto 3"}
  ]

  const products = [
    {
      name: "Sapato Vermelho",
      imagem: "/public/product-thumb-2.jpeg",
      price: "500",
      priceDiscount: "450"
    },
    {
      name: "Sapato Bege",
      imagem: "/public/product-thumb-3.jpeg",
      price: "470",
      priceDiscount: "399.99"
    },
    {
      name: "Tênis branco com detalhes em azul e marrom",
      imagem: "/public/product-thumb-4.jpeg",
      price: "399.90",
      priceDiscount: "375.90"
    },
    {
      name: "Tênis verde",
      imagem: "/public/product-thumb-5.jpeg",
      price: "600",
      priceDiscount: "550"
    },
  ]


  
    return (

      <>
        <Header/>
        <div className="flex flex-row gap-5 flex-wrap justify-content-center p-5">
          
          <div style={{ flex: "1 1 400px", maxWidth: "700px"}}>
            <Gallery
             images={images}
             radius="4px"
             showThumbs
            />
          </div>


          <div style={{ flex: "1 1 320px", maxWidth: "450px" }}>
            <BuyBox
              name="Tênis Esportivo"
              reference="REF9876"
              stars={4.7}
              rating={123}
              price={299.99}
              priceDiscount={199.99}
              description="Tênis confortável, com amortecimento e ideal para uso diário."
              >

              <h4 className="mb-2">Tamanhos</h4>
              <ProductOptions
                options={["38", "39", "40", "41", "42"]}
                radius="6px"
                shape="square"
                type="text"
              />

              <h4 style={{ margin: "1rem 0 0.5rem" }} >Cores</h4>
              <ProductOptions
              options={["#2c2303", "#df9bb5", "#6e573b"]}
              shape="circle"
              type="color"
              />
            </BuyBox>
          </div>
        </div>

        <div>
          <Section 
            title="Produtos recomendados"
            titleAlign="left"
            link={{"text": "Ver todos","href": "/produtos"}}>
              <ProductListing products={products}/>
          </Section>
        </div>  
        <Footer/>    
      </>

      )
    }



export default ProductViewPage
