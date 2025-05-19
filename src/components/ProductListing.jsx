import ProductCard from "./ProductCard"

const ProductListing = ({products}) => {

  return (
    <div className="flex flex-wrap gap-3 justify-content-center p-3">
      {products.map((product, index) => (
        <ProductCard
        key={index}
        imagem={product.imagem}
        name={product.name}
        price={product.price}
        priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  )
}

export default ProductListing
