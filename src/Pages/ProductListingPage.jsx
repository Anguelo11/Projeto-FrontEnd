import { useState } from "react"
import FilterGroup from "../components/FilterGroup"
import SortSelect from "../components/SortSelect"
import ProductCard from "../components/ProductCard"
import Section from "../components/Section"
import ProductListing from "../components/ProductListing"
import Header from "../components/Header"
import Footer from "../components/Footer"


const ProductListingPage = () => {

    const [sortOrder,setSortOrder] = useState('low');

    const handleSortChange = (value) => {
        setSortOrder(value);
    };

    const products = [
    {
       id: 1,
       name: "Tênis vermelho",
       imagem: 'public/product-thumb-1.jpeg',
       price: 300,
       priceDiscount: 149.9
    },
    {
       id: 2,
       name: "Tênis de outra cor",
       imagem: 'public/product-thumb-2.jpeg',
       price: 100,
       priceDiscount: 75
     },
    {
       id: 3,
       name: "Tênis amarelo_escuro",
       imagem: 'public/product-thumb-3.jpeg',
       price: 80,
       priceDiscount: 67.9
    },
    {
       id: 4,
       name: "Tênis rosa_claro",
       imagem: 'public/product-thumb-4.jpeg',
       price: 80,
       priceDiscount: 67.9
    },
    {
       id: 5,
       name: "Tênis azul_marinho",
       imagem: 'public/product-thumb-5.jpeg',
       price: 39,
       priceDiscount: 20
    },
    {
       id: 6,
       name: "Tênis azul_bebe",
       imagem: 'public/product-thumb-1.jpeg',
       price: 65,
       priceDiscount: 47.7
    },
    {
       id: 7,
       name: "Tênis vermelho-claro",
       imagem: 'public/product-thumb-2.jpeg',
       price: 65,
       priceDiscount: 42.7
    },
    {
       id: 8,
       name: "Tênis vermelho_escuro",
       imagem: 'public/product-thumb-3.jpeg',
       price: 100,
       priceDiscount: 75
    },
    {
       id: 9,
       name: "Tênis verde_escuro",
       imagem: 'public/product-thumb-4.jpeg',
       price: 50,
       priceDiscount: 39.9
    },
        {
       id: 10,
       name: "Tênis amarelo",
       imagem: 'public/product-thumb-5.jpeg',
       price: 50,
       priceDiscount: 43.5
    },
    {
       id: 11,
       name: "Tênis marrom",
       imagem: 'public/product-thumb-1.jpeg',
       price: 47,
       priceDiscount: 38.5
    },
    {
       id: 12,
       name: "Tênis rosa",
       imagem: 'public/product-thumb-2.jpeg',
       price: 100,
       priceDiscount: 67
    },
    {
       id: 13,
       name: "Tênis verde",
       imagem: 'public/product-thumb-3.jpeg',
       price: 97,
       priceDiscount: 64
    },
    {
       id: 14,
       name: "Tênis azul",
       imagem: 'public/product-thumb-4.jpeg',
       price: 86,
       priceDiscount: 59.9
    },
    {
       id: 15,
       name: "Tênis roxo",
       imagem: 'public/product-thumb-5.jpeg',
       price: 75,
       priceDiscount: 69
    },          
    ]
    
    const sortedProducts = [...products].sort((a, b) => {
    const priceA = a.priceDiscount || a.price;
    const priceB = b.priceDiscount || b.price;

        return sortOrder === 'low' ? priceA - priceB : priceB - priceA;
    });

    const [filteredProducts, setfilteredProducts] = useState(products);
    

  return (
    <>
      <Header/>
        <div style={{ display: 'flex', padding: '20px' }}>
            <div style={{ width: '308px', marginRight: '24px'}}>
               
                <SortSelect onSortChange={handleSortChange} />

                <div style={{
                    width: "308px",
                    background: "white",
                    padding: "16px",
                    boxSizing: "border-box"
                }}>

                    <h3 style={{fontSize: "16px", color:    "#474747"}}>Filtrar por</h3>

                    <hr style={{borderColor: "#CCCCCC", height: "1px", margin: "12px 0"}}/>

                    <FilterGroup
                    title="Tamanhos"
                    inputType="checkbox"
                    options={[
                        {text: "P"},
                        {text: "M"},
                        {text: "G"}
                    ]}
                    />

                    <FilterGroup
                    title="Cores"
                    inputType="Radio"
                    options={[
                        {text: "Vermelho", value: "red"},
                        {text: "Azul", value: "blue"},
                        {text: "green", value: "green"},
                    ]}
                    />
                </div>
            </div>
            <Section
            title={`${filteredProducts.length} produtos encontrados`}
            titleAlign="left">
                <ProductListing products={sortedProducts}/>
            </Section>
            
        </div>
        <Footer/>
    </>
  )
}

export default ProductListingPage

