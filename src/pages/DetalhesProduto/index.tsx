import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/ItemListaProdutos';

import { getProductById } from '../../services/api';

import { TipodeProduto } from '../../types';

function ProductDetails() {
  // Obtém o parâmetro 'id' da URL usando react-router
  const { id: productIdParam } = useParams();

  // Estado para armazenar os detalhes do produto
  const [product, setProduct] = useState<TipodeProduto>();

  // Função para buscar os detalhes do produto por ID
  const requestProductDetails = async () => {
    // Chama a API para obter os detalhes do produto pelo ID
    const {
      id: productID,
      title: name,
      thumbnail: image,
      price,
    } = await getProductById(productIdParam as string);

    // Define o estado com os detalhes do produto
    setProduct({ productID, name, image, price });
  };

  // Efeito que chama a função de solicitação quando o componente é montado
  useEffect(() => {
    requestProductDetails();
  }, []);

  // Se os detalhes do produto ainda não foram carregados, exibe uma mensagem de carregamento
  if (!product) return <p>Carregando ...</p>;

  // Renderiza o componente ProductCard com os detalhes do produto
  return (
    <ProductCard { ...product } testid="detail-" />
  );
}

export default ProductDetails;
