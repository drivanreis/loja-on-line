import { Link } from 'react-router-dom';

function ShoppingCartLink() {
  return (
    <Link to="/shoppingcart" data-testid="shopping-cart-button">
      <span className="material-symbols-outlined">shopping_cart</span>
    </Link>
  );
}

export default ShoppingCartLink;
