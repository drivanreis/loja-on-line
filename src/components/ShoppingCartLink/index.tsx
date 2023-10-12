import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

// Componente que representa um link para a página do carrinho de compras
function ShoppingCartLink() {
  return (
    <Link to="/shoppingcart" data-testid="shopping-cart-button">
      {/* Ícone do carrinho de compras (substitua com o ícone real) */}
      <span className="material-symbols-outlined">shopping_cart</span>
    </Link>
  );
}

export default ShoppingCartLink;
