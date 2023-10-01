import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductType } from '../../types';
import './style.css';

import ShoppingCartContext from '../../contexts/ShoppingCartContext';

function ProductCard(product: ProductType & { testid: string }) {
  const { productID, name, image, price, testid = '' } = product;
  const { addCartProduct } = useContext(ShoppingCartContext);

  const handleClick = () => addCartProduct({
    productID, name, image, price, quantity: 1,
  });

  return (
    <li id="liCard" data-testid="product" aria-hidden="true">
      <Link
        data-testid="product-detail-link"
        to={ `/product/${productID}` }
      >
        Detalhes do Produto
      </Link>
      <h3 data-testid="product-detail-name">{ name }</h3>
      <img data-testid="product-detail-image" src={ image } alt={ name } />
      <p data-testid="product-detail-price">{`R$ ${price}`}</p>
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
