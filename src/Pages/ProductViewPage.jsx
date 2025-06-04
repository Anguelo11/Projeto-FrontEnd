import Gallery from "../components/Gallery"
import BuyBox from "../components/BuyBox"
import ProductOptions from "../components/ProductOptions"
import ProductListing from "../components/ProductListing"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Section from "../components/Section"

import productItem1 from '../assets/assets/produc-image-2.jpeg';
import productItem2 from '../assets/assets/produc-image-3.jpeg';
import productItem3 from '../assets/assets/produc-image-4.jpeg';

import redShoes from '../assets/assets/product-thumb-2.jpeg'
import BrownShoes from '../assets/assets/product-thumb-3.jpeg'
import whiteShoes from '../assets/assets/product-thumb-4.jpeg'
import greenShoes from '../assets/assets/product-thumb-5.jpeg'

const ProductViewPage = () => {
  const images = [
    {src: `${productItem1}`, alt: "Produto 1"},
    {src: `${productItem2}`, alt: "Produto 2"},
    {src: `${productItem3}`, alt: "Produto 3"}
  ]

  const products = [
    {
      name: "Sapato Vermelho",
      imagem: `${redShoes}`,
      price: "500",
      priceDiscount: "450"
    },
    {
      name: "Sapato Bege",
      imagem: `${BrownShoes}`,
      price: "470",
      priceDiscount: "399.99"
    },
    {
      name: "Tênis branco com detalhes em azul e marrom",
      imagem: `${whiteShoes}`,
      price: "399.90",
      priceDiscount: "375.90"
    },
    {
      name: "Tênis verde",
      imagem: `${greenShoes}`,
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
