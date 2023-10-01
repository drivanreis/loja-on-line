import { useState, useEffect } from 'react';
import { getCategories } from '../../services/api';
import CategoryItem from '../CategoryItem';
import { CategoryType, ProductType } from '../../types';

function CategoriesListSidebar() {
  const [categoriesList, setCategoriesList] = useState<CategoryType[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  const requestCategories = async () => {
    const categories = await getCategories();
    setCategoriesList(categories);
  };

  useEffect(() => {
    requestCategories();
  }, []);

  return (
    <aside>
      <ul>
        {categoriesList
          .map((category) => (
            <CategoryItem
              { ...{ category, setSelectedCategoryId } }
              key={ category.id }
            />))}
      </ul>
    </aside>
  );
}

export default CategoriesListSidebar;
