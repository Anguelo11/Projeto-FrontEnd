import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Footer from "../components/Footer";

import homeSlide1 from '../assets/assets/home-slide-1.jpeg';
import homeSlide2 from '../assets/assets/home-slide-2.jpeg';


import featuredImage1 from '../assets/assets/collection-1.png';
import featuredImage2 from '../assets/assets/collection-1.png';
import featuredImage3 from '../assets/assets/collection-1.png';

import shoes from '../assets/assets/product-thumb-1.jpeg';




const HomePage = () => {

  const products_trending = [
    {
      id: 1,
      name: "Tênis vermelho",
      imagem: `${shoes}`,
      price: 200,
      priceDiscount: 149.9
      
    },
    {
      id: 2,
      name: "Tênis vermelho",
      imagem: `${shoes}`,
      price: 200,
      priceDiscount: 149.9
    },    
    {
      id: 3,
      name: "Tênis vermelho",
      imagem: `${shoes}`,
      price: 200,
      priceDiscount: 149.9
    },    
    {
      id: 4,
      name: "Tênis vermelho",
      imagem: `${shoes}`,
      price: 200,
      priceDiscount: 149.9
    },
    {
      id: 5,
      name: "Tênis vermelho",
      imagem: `${shoes}`,
      price: 200,
      priceDiscount: 149.9
    },
    {
      id: 6,
      name: "Tênis vermelho",
      imagem: `${shoes}`,
      price: 200,
      priceDiscount: 149.9
    },
    {
      id: 7,
      name: "Tênis vermelho",
      imagem: `${shoes}`,
      price: 200,
      priceDiscount: 149.9
    },
    {
      id: 8,
      name: "Tênis vermelho",
      imagem: `${shoes}`,
      price: 200,
      priceDiscount: 149.9
    },            
  ]

  const images = [
    {"src": homeSlide1},
    {"src": homeSlide2}      
  ]


    return(
        <div>
          <Header/>
          <Section
            title="Mais Vendidos"
            titleAlign="left"
            link={{ text: "Ver tudo", href: "/Projeto-FrontEnd/produtos" }}>
            
            <div className="w-full flex justify-content-center">
              <Gallery
               images={images}
               width="1440px"
               height="681px"
               radius="4px"
              />
            </div>

            <Section title="Coleções em destaque" titleAlign="center">
              <div className="flex flex-wrap justify-content-center gap-3">
                <img src={featuredImage1}  className="border-round" style=  {{width: "500px", borderRadius:   "4px"}}/>

               <img src={featuredImage2}  className="border-round" style={{width: "500px", borderRadius:   "4px"}}/>

                <img src={featuredImage3}  className="border-round" style=  {{width: "500px", borderRadius:   "4px"}}/>
              </div>

              <Section title="Produtos em alta" titleAlign="left">
              <ProductListing products={products_trending}/>
              </Section>
            </Section>
          </Section>
          <Footer/>
        </div>
    );
};

export default HomePage;