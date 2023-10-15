// A pagina principal e/ou Começo não é bom trocar...
// Mas se o

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CategoriesListSidebar from '../../components/ListaCategoriaBaraLateral';
import CardsList from '../../components/ListaProdutos';

import { getProductsFromCategoryAndQuery } from '../../services/api';
import { TipodeProduto, TipodePesquisadeProduto } from '../../types';

function Home() {
  // Obtém os parâmetros da URL usando react-router
  const { category, query } = useParams();

  // Estado para armazenar os produtos
  const [products, setProducts] = useState<TipodeProduto[]>();

  // Função para buscar os produtos com base na categoria e consulta
  const searchProducts = async () => {
    // Converte 'all' em undefined para buscar todos os produtos
    const categoryValue = category === 'all' ? undefined : category;

    // Chama a API para obter os produtos
    const { results } = await getProductsFromCategoryAndQuery(categoryValue, query);

    // Mapeia os resultados para o formato desejado
    const productsSearch = results.map(({
      id: productID,
      title: name,
      thumbnail: image,
      price,
    }: TipodePesquisadeProduto) => ({ productID, name, image, price }));

    // Atualiza o estado com os produtos encontrados
    setProducts(productsSearch);
  };

  // Requisito 02 - Inicio
  // Mensagem inicial quando nenhum termo de pesquisa foi inserido
  const msgInicial = (
    <p data-testid="home-initial-message">
      Digite algum termo de pesquisa ou escolha uma categoria.
    </p>
  );
  // Requisito 02 - Fim

  // Mensagem para exibir quando nenhum produto foi encontrado
  const msgNadaEncontrado = <p>Nenhum produto foi encontrado</p>;

  // Determina qual mensagem exibir com base na categoria
  const message = category ? msgNadaEncontrado : msgInicial;

  // Efeito que chama a função de pesquisa quando a categoria ou consulta muda
  useEffect(() => {
    if (category) searchProducts();
  }, [category, query]);

  return (
    <>
      {/* Barra lateral com lista de categorias */}
      <CategoriesListSidebar />

      {/* Se não houver produtos, exibe a mensagem apropriada, caso contrário, exibe a lista de cartões de produtos */}
      <section>
        {!products?.length ? (
          message
        ) : (
          <CardsList products={ products } />
        )}
      </section>
    </>
  );
}

export default Home;
