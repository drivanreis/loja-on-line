import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Componente que representa a barra de pesquisa
function SearchBar() {
  // Estado para armazenar o valor da pesquisa
  const [searchValue, setSearchValue] = useState('');

  // Função chamada quando o valor da pesquisa é alterado
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Atualiza o estado com o novo valor da pesquisa
    setSearchValue(event.target.value);
  };

  return (
    <div>
      {/* Input de pesquisa */}
      <input
        data-testid="query-input"
        type="search"
        value={ searchValue }
        onChange={ handleChange }
        placeholder="Digite algum termo de pesquisa"
      />
      
      {/* Link que leva para a página de pesquisa com o termo de pesquisa */}
      <Link to={ `/search/all/${searchValue}` } data-testid="query-button">Buscar</Link>
    </div>
  );
}

export default SearchBar;
