import ProductListing from "../components/ProductListing";
import Section from "../components/Section";


const HomePage = () => {

    const products = [
  {
    id: 1,
    imagem: 'src/assets/capas blog - tinfra.png',
    name: 'Tênis Esportivo',
    price: 'R$ 300,00',
    priceDiscount: 'R$ 199,00'
  }]

    return(
        <>
      <Section
        title="Mais Vendidos"
        titleAlign="left"
        link={{ text: "Ver tudo", href: "/produtos" }}
      >
        <ProductListing products={products} />
      </Section>
        </>
    );
};

export default HomePage;