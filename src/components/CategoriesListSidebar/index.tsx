import { useState, useEffect } from 'react';
import { getCategories } from '../../services/api';
import CategoryItem from '../CategoryItem';
import { TipodeCategoria } from '../../types';
import './style.css'

function CategoriesListSidebar() {
  // Estado para armazenar a lista de categorias
  const [categoriesList, setCategoriesList] = useState<TipodeCategoria[]>([]);

  // Estado para armazenar a categoria selecionada (opcional)
  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  // Função para buscar a lista de categorias
  const requestCategories = async () => {
    const categories = await getCategories();
    setCategoriesList(categories);
  };

  // Efeito que chama a função de solicitação quando o componente é montado
  useEffect(() => {
    requestCategories();
  }, []);

  return (
    // Renderiza uma barra lateral (aside) com a lista de categorias em uma lista não ordenada (ul)
    <aside className='barraLateral'>
      <ul>
        {categoriesList.map((category) => (
          // Renderiza um item de categoria (CategoryItem) com os dados da categoria e a função para selecionar a categoria
          <CategoryItem
            { ...{ category, setSelectedCategoryId } }
            key={ category.id }
          />
        ))}
      </ul>
    </aside>
  );
}

export default CategoriesListSidebar;
