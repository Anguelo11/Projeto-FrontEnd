
const ProductCard = ({ imagem, name, price, priceDiscount }) => {
  const hasDiscount = !!priceDiscount;

  const styles = {
    container: {
      width: '292px',
      fontFamily: 'Arial, sans-serif',
    },
    image: {
      width: '292px',
      height: '321px',
      objectFit: 'cover',
      marginBottom: '8px',
    },
    name: {
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '4px',
    },
    priceGroup: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    price: {
      color: '#1F1F1F',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    priceOld: {
      color: '#1F1F1F',
      fontSize: '20px',
      textDecoration: 'line-through',
    },
    priceDiscount: {
      color: '#1F1F1F',
      fontSize: '24px',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <img src={imagem} alt={name} style={styles.image} />
      <h3 style={styles.name}>{name}</h3>

      <div style={styles.priceGroup}>
        {hasDiscount ? (
          <>
            <span style={styles.priceOld}>R${price}</span>
            <span style={styles.priceDiscount}>R${priceDiscount}</span>
          </>
        ) : (
          <span style={styles.price}>{price}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
