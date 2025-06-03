import { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Ripple } from "primereact/ripple";

const ProductOptions = ({ options, radius = "4px", shape = "square", type = "text" }) => {
  const [selected, setSelected] = useState(null);

  const getStyle = (option) => {
    const isSelected = selected === option;

    const baseStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0.25rem",
      cursor: "pointer",
      border: isSelected ? "2px solid #C92071" : "1px solid #CCCCCC",
      transition: "all 0.2s ease",
    };

    if (shape === "circle") {
      baseStyle.width = "31px";
      baseStyle.height = "31px";
      baseStyle.borderRadius = "50%";
    } else {
      baseStyle.width = "auto";
      baseStyle.height = "46px";
      baseStyle.padding = "0 12px";
      baseStyle.borderRadius = radius;
    }

    if (type === "color") {
      baseStyle.backgroundColor = option;
    } else {
      baseStyle.fontSize = "24px";
      baseStyle.color = "#474747";
      baseStyle.backgroundColor = "#fff";
    }

    return baseStyle;
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {options.map((option, index) => (
        <div
          key={index}
          className={classNames("p-ripple")}
          style={getStyle(option)}
          onClick={() => setSelected(option)}
        >
          {type === "text" && option}
          <Ripple />
        </div>
      ))}
    </div>
  );
};

ProductOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  radius: PropTypes.string,
  shape: PropTypes.oneOf(["square", "circle"]).isRequired,
  type: PropTypes.oneOf(["text", "color"]).isRequired,
};

export default ProductOptions;
