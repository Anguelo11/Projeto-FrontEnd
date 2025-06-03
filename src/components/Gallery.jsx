import { useState } from "react";

const Gallery = ({ images = [], width = "100%", height = "auto", radius = "0px", showThumbs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const prev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div style={{ width, height, position: "relative", overflow: "hidden" }}>
      <img
        src={images[currentIndex]?.src}
        alt={images[currentIndex]?.alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: radius
        }}
      />


      <img
        src="/src/assets/assets/arrow-left.svg"
        alt="Anterior"
        onClick={prev}
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: currentIndex === 0 ? "not-allowed" : "pointer",
          opacity: currentIndex === 0 ? 0.5 : 1
        }}
      />


      <img
        src="/src/assets/assets/arrow-right.svg"
        alt="Próximo"
        onClick={next}
        style={{
          position: "absolute",
          right: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          cursor: currentIndex === images.length - 1 ? "not-allowed" : "pointer",
          opacity: currentIndex === images.length - 1 ? 0.5 : 1
        }}
      />


      {showThumbs && (
        <div style={{ display: "flex", gap: "10px", marginTop: "10px", justifyContent: "center" }}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              onClick={() => goToIndex(index)}
              style={{
                width: "117px",
                height: "95px",
                objectFit: "cover",
                borderRadius: radius,
                border: index === currentIndex ? "2px solid #C92071" : "2px solid transparent",
                cursor: "pointer"
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
