// Reguisito 3
import React, { useEffect, useState, useContext } from 'react';

import { TipodeCartaoProduto } from '../../types';

import ContestoLoja from '../../contexts/ShoppingCartContext';

import ProductCartCard from '../../components/ItemFavorito';

function ShoppingCart() {
  // Obtém a função getShoppingCartList do contexto ShoppingCartContext
  const { getShoppingCartList } = useContext(ContestoLoja);

  // Estado para armazenar os produtos no carrinho
  const [cartProducts, setCartProducts] = useState<TipodeCartaoProduto[]>([]);

  // Função para solicitar a lista de produtos no carrinho
  const requestCartProducts = () => {
    // Chama a função getShoppingCartList para obter os produtos no carrinho
    const shoppingCartList = getShoppingCartList();

    // Define o estado com a lista de produtos no carrinho
    setCartProducts(shoppingCartList);
  };

  // Efeito que chama a função de solicitação quando o componente é montado
  useEffect(() => {
    requestCartProducts();
  }, []);

  return !cartProducts.length ? (
    // Mensagem exibida quando o carrinho está vazio
    <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio.</p>
  ) : (
    // Mapeia os produtos no carrinho e renderiza os cartões de produtos
    cartProducts.map((product) => (
      <ProductCartCard { ...product } key={ product.productID } />
    ))
  );
}

export default ShoppingCart;
