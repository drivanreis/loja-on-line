import { useNavigate, useParams } from 'react-router-dom';
import { CategoryType } from '../../types';

type CategoryItemProps = {
  category: CategoryType;
  setSelectedCategoryId: (categoryID: string) => void;
};

function CategoryItem({ category, setSelectedCategoryId }: CategoryItemProps) {
  const { id, name } = category;
  const { query } = useParams();
  const navigate = useNavigate();

  const handleChange = () => {
    setSelectedCategoryId(id);
    navigate(`/search/${id}/${query}`);
  };

  return (
    <li>
      <input
        type="radio"
        name="category"
        value={ id }
        id={ id }
        onChange={ handleChange }
      />
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
