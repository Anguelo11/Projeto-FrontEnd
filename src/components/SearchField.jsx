import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmed = searchTerm.trim();
    if (trimmed) {
      navigate(`/products?filter=${encodeURIComponent(trimmed)}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex align-items-center border-round border-1 surface-border overflow-hidden w-9">
      <InputText
        placeholder="Buscar produto"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border-none w-12"
      />
      <Button
        icon="pi pi-search"
        className="p-button-text"
        onClick={handleSearch}
        aria-label="Buscar"
      />
    </div>
  );
};

export default SearchField;


