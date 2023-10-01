import { useState } from 'react';
import { Link } from 'react-router-dom';

function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <input
        data-testid="query-input"
        type="search"
        value={ searchValue }
        onChange={ handleChange }
        placeholder="Digite algum termo de pesquisa"
      />
      <Link to={ `/search/all/${searchValue}` } data-testid="query-button">Buscar</Link>
    </div>
  );
}

export default SearchBar;
