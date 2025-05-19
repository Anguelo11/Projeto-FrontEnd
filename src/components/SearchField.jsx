import { InputText } from "primereact/inputtext";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

        

const SearchField = () => {


      const [query,setQuery] = useState('')
      /*const navigate = useNavigate();*/

      const handleSearch = (e) => {
        if (e) e.preventDefault();

        if (query.trim()){
          navigate(`/products?filter=${encodeURIComponent(query)}`);
        }
      }


  return (
      <div>
            <form onSubmit={handleSearch} className="flex relative max-w-md">
              <IconField iconPosition="right">

                

                <InputText
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar..."
                style={{background: '#F5F5F5', width: '47rem'}}
                className=" h-4rem border-none "
                />
                
                <InputIcon 
                className="pi pi-search cursor-pointer"
                /*onClick={handleSearch}*/
                />
                

              </IconField>
            </form>
      </div>

  )
}

export default SearchField;

