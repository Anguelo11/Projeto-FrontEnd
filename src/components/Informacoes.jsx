// src/components/Informacoes.jsx
import { Link } from "react-router-dom";

const Informacoes = ({ title, informations }) => {
  return (
    <div>
      <h4 className="font-bold mb-3 mt-1 text-xl">{title}</h4>
      <div className="flex flex-column mt-4 gap-1">
        {informations.map((item, index) => (
          <div className="mt-2"key={index}>
            <Link to={item.link} className="no-underline text-xs text-gray-300 ">
              {item.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Informacoes;

