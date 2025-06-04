import { useState } from "react"
import FilterGroup from "../components/FilterGroup"
import SortSelect from "../components/SortSelect"
import Section from "../components/Section"
import ProductListing from "../components/ProductListing"
import Header from "../components/Header"
import Footer from "../components/Footer"

import shoesBrown from '../assets/assets/product-thumb-3.jpeg'

const ProductListingPage = () => {

    const [sortOrder,setSortOrder] = useState('low');

    const handleSortChange = (value) => {
        setSortOrder(value);
    };

    const products = [
    {
       id: 1,
       name: "Tênis Marrom",
       imagem: `${shoesBrown}`,
       price: 300,
       priceDiscount: 149.9
    },
    {
       id: 2,
       name: "Tênis Marrom",
       imagem: `${shoesBrown}`,
       price: 100,
       priceDiscount: 75
     },
    {
       id: 3,
       name: "Tênis Marrom",
       imagem: `${shoesBrown}`,
       price: 80,
       priceDiscount: 67.9
    },
    {
       id: 4,
       name: "Tênis Marrom",
       imagem: `${shoesBrown}`,
       price: 80,
       priceDiscount: 67.9
    },
    {
       id: 5,
       name: "Tênis Marrom",
       imagem: `${shoesBrown}`,
       price: 39,
       priceDiscount: 20
    },
    {
       id: 6,
       name: "Tênis Marrom",
       imagem: `${shoesBrown}`,
       price: 65,
       priceDiscount: 47.7
    },
    {
       id: 7,
       name: "Tênis Marrom",
       imagem: `${shoesBrown}`,
       price: 65,
       priceDiscount: 42.7
    },
    {
       id: 8,
       name: "Tênis Marrom",
       imagem: `${shoesBrown}`,
       price: 100,
       priceDiscount: 75
    },
    {
       id: 9,
       name: "Tênis Marrom",
       imagem: `${shoesBrown}`,
       price: 50,
       priceDiscount: 39.9
    },
        {
       id: 10,
       name: "Tênis Marrom",
       imagem: `${shoesBrown}`,
       price: 50,
       priceDiscount: 43.5
    },
    {
       id: 11,
       name: "Tênis Marrom",
       imagem: `${shoesBrown}`,
       price: 47,
       priceDiscount: 38.5
    },
    {
       id: 12,
       name: "Tênis Marrom",
       imagem: `${shoesBrown}`,
       price: 100,
       priceDiscount: 67
    },
    {
       id: 13,
       name: "Tênis Marrom",
       imagem: `${shoesBrown}`,
       price: 97,
       priceDiscount: 64
    },
    {
       id: 14,
       name: "Tênis Marrom",
       imagem: `${shoesBrown}`,
       price: 86,
       priceDiscount: 59.9
    },
    {
       id: 15,
       name: "Tênis Marrom",
       imagem: `${shoesBrown}`,
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

