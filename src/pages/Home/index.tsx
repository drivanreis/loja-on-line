import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CategoriesListSidebar from '../../components/CategoriesListSidebar';
import CardsList from '../../components/CardsList';

import { getProductsFromCategoryAndQuery } from '../../services/api';
import { ProductType } from '../../types';

type ProductSearchType = {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
};

function Home() {
  const { category, query } = useParams();
  const [products, setProducts] = useState<ProductType[]>();

  const searchProducts = async () => {
    const categoryValue = category === 'all' ? undefined : category;
    const { results } = await getProductsFromCategoryAndQuery(categoryValue, query);
    const productsSearch = results.map(({
      id: productID,
      title: name,
      thumbnail: image,
      price,
    }: ProductSearchType) => ({ productID, name, image, price }));

    setProducts(productsSearch);
  };

  const initialMessage = (
    <p data-testid="home-initial-message">
      Digite algum termo de pesquisa ou escolha uma categoria.
    </p>
  );

  const notFoundMessage = <p>Nenhum produto encontrado</p>;

  const message = category ? notFoundMessage : initialMessage;

  useEffect(() => {
    if (category) searchProducts();
  }, [category, query]);

  return (
    <>
      <CategoriesListSidebar />
      <section>
        {!products?.length ? (
          message
        ) : (
          <CardsList { ...{ products } } />
        )}
      </section>
    </>
  );
}

export default Home;
