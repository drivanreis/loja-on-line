import React, { useContext, useState } from 'react';
import { TipodeCartaoProduto } from '../../types';
import ContestoLoja from '../../contexts/ShoppingCartContext';
import './style.css';

// Componente que representa um cartão de produto no carrinho de compras
function ProductCartCard(product: TipodeCartaoProduto) {
  // Obtém as funções relacionadas ao carrinho de compras do contexto
  const {
    removeCartProduct,
    decrementCartItem,
    incrementCartItem,
  } = useContext(ContestoLoja);

  // Extrai os dados do produto do parâmetro
  const { productID, name, image, price, quantity: initialQuantity } = product;

  const [quantity, setQuantity] = useState(initialQuantity);

  // Função chamada quando o botão "Remover" é clicado
  const handleRemoveClick = () => removeCartProduct(productID);

  // Função chamada quando o botão "-" é clicado para decrementar a quantidade
  const handleDecrementClick = () => {
    decrementCartItem(productID);
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  // Função chamada quando o botão "+" é clicado para incrementar a quantidade
  const handleIncrementClick = () => {
    incrementCartItem(productID);
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <section>
      {/* Botão para remover o produto do carrinho */}
      <button data-testid="remove-product" onClick={ handleRemoveClick }>X☠️X </button>
      <img src={ image } alt={ name } />
      <h2 data-testid="shopping-cart-product-name">{name}</h2>
      <div className="menosMais">
        {/* Botão para decrementar a quantidade */}
        <button
          data-testid="product-decrease-quantity"
          onClick={ handleDecrementClick }
        >
          -➖
        </button>
        {/* Exibe a quantidade do produto no carrinho */}

        <p data-testid="shopping-cart-product-quantity">{quantity}</p>

        {/* Botão para incrementar a quantidade */}
        <button
          data-testid="product-increase-quantity"
          onClick={ handleIncrementClick }
        >
          +➕
        </button>
      </div>
      {/* Exibe o preço total do produto */}
      <p>{`R$ ${(price * quantity).toFixed(2)}`}</p>
    </section>
  );
}

export default ProductCartCard;
