import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TipodeProduto } from '../../types';
import './style.css';

import ContestoLoja from '../../contexts/ShoppingCartContext';

// Componente que representa um cartão de produto
function ProductCard(product: TipodeProduto & { testid: string }) {
  const { productID, name, image, price, testid = '' } = product;

  // Obtém a função addCartProduct do contexto do carrinho de compras
  const { addCartProduct } = useContext(ContestoLoja);

  // Função chamada quando o botão "Adicionar ao carrinho" é clicado
  const handleClick = () => {
    // Chama a função addCartProduct para adicionar o produto ao carrinho
    addCartProduct({
      productID,
      name,
      image,
      price,
      quantity: 1, // Define a quantidade inicial como 1
    });
  };

  return (
    <li className="itemCartao" data-testid="product" aria-hidden="true">
      {/* Link para a página de detalhes do produto */}
      <Link
        data-testid="product-detail-link"
        to={ `/product/${productID}` }
      >
        Detalhes do Produto
      </Link>
      <h3 data-testid="product-detail-name">{ name }</h3>
      <img data-testid="product-detail-image" src={ image } alt={ name } />
      <p data-testid="product-detail-price">{`R$ ${price}`}</p>

      {/* Botão "Adicionar ao carrinho" */}
      <button
        data-testid={ `product-${testid}add-to-cart` }
        onClick={ handleClick }
      >
        Adicionar ao carrinho
      </button>
    </li>
  );
}

export default ProductCard;
