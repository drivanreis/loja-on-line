import { useNavigate, useParams } from 'react-router-dom';
import { TipodeCategoria } from '../../types';

import './style.css';

// Props esperadas pelo componente CategoryItem
type CategoryItemProps = {
  category: TipodeCategoria;
  setSelectedCategoryId: (categoryID: string) => void;
};

function CategoryItem({ category, setSelectedCategoryId }: CategoryItemProps) {
  // Extrai o id e o nome da categoria das props
  const { id, name } = category;

  // Obtém o parâmetro 'query' da URL usando react-router
  const { query } = useParams();

  // Hook useNavigate para navegar para a página de pesquisa com a categoria selecionada
  const navigate = useNavigate();

  // Função chamada quando o input da categoria é alterado
  const handleChange = () => {
    // Chama a função setSelectedCategoryId para definir a categoria selecionada
    setSelectedCategoryId(id);

    // Navega para a página de pesquisa com a categoria e a consulta na URL
    navigate(`/search/${id}/${query}`);
  };

  return (
    <li className="itemCategoria">
      {/* Input de tipo rádio para seleção da categoria */}
      <input
        type="radio"
        name="category"
        value={ id }
        id={ id }
        onChange={ handleChange }
      />

      {/* Rótulo (label) da categoria */}
      <label
        aria-hidden="true"
        data-testid="category"
        htmlFor={ id }
      >
        {name}
      </label>
    </li>
  );
}

export default CategoryItem;
