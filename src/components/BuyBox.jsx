import starIcon from '../assets/assets/star-icon.svg';

const BuyBox = (
{  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children}
) => {
  const hasDiscount = Boolean(priceDiscount)
  
  
  return (
    <div 
    style={{border: "1px solid #e0e0e0", borderRadius: "0.5rem", background: "#fff"}}
    className="max-w-25rem p-4">

      <h1 style={{fontSize: "32px", color: "#1F1F1F", margin: "0 0 0.5rem"}}>{name}</h1>
      
      <p style={{fontSize: "12px", color: "#666666", margin: "0 0 1rem"}}>Ref: {reference}</p>

      <div className="flex align-items-center mb-3">
        <div style={{backgroundColor: "#F6AA1C",
            color: "#fff",
            borderRadius: "4px",
            padding: "0.25rem 0.5rem",
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            marginRight: "0.5rem",
          }}>
            <img src={starIcon} alt="estrela" className="w-3 h-3 mr-1" />{stars}
        </div>
        <span style={{fontSize: "14px",color: "#8F8F8F"}}>{rating} avaliações</span>
      </div>

      <div className="flex align-items-baseline gap-2 mb-3">
        {hasDiscount && (
          <span style={{fontSize: "16px", color: "#CCCCCC", textDecoration: "line-through"}}>
            R$ {price}
          </span>
        )}
        <span style={{fontSize: "32px", color: "#474747"}}>
          R$ {hasDiscount ? priceDiscount : price}
        </span>
      </div>

      <p style={{fontSize: "14px", color: "#474747", marginBottom: "1rem"}}>{description}</p>

      <div className="mb-4">{children}</div>

      <button 
        style={{
          backgroundColor: "#F6AA1C", 
          color: "white",
          fontSize: "16px",
          padding: "0.75rem 1.5rem",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          width: "100%",}}>
            Comprar
      </button>
    </div>
  )
}

export default BuyBox
