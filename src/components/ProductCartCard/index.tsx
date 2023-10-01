import { useContext } from 'react';
import { CartProductType } from '../../types';
import ShoppingCartContext from '../../contexts/ShoppingCartContext';

function ProductCartCard(product: CartProductType) {
  const {
    removeCartProduct,
    decrementCartItem,
    incrementCartItem,
  } = useContext(ShoppingCartContext);

  const { productID, name, image, price, quantity } = product;

  const handleRemoveClick = () => removeCartProduct(productID);
  const handleDecrementClick = () => decrementCartItem(productID);
  const handleIncrementClick = () => incrementCartItem(productID);

  return (
    <section>
      <button data-testid="remove-product" onClick={ handleRemoveClick }>X</button>
      <img src={ image } alt={ name } />
      <h2 data-testid="shopping-cart-product-name">{name}</h2>
      <div>
        <button
          data-testid="product-decrease-quantity"
          onClick={ handleDecrementClick }
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <button
          data-testid="product-increase-quantity"
          onClick={ handleIncrementClick }
        >
          +
        </button>
      </div>
      <p>{`R$ ${(price * quantity).toFixed(2)}`}</p>
    </section>
  );
}

export default ProductCartCard;
