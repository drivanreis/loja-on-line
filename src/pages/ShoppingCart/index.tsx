import { useEffect, useState, useContext } from 'react';

import { CartProductType } from '../../types';

import ShoppingCartContext from '../../contexts/ShoppingCartContext';

import ProductCartCard from '../../components/ProductCartCard';

function ShoppingCart() {
  const { getShoppingCartList } = useContext(ShoppingCartContext);
  const [cartProducts, setCartProducts] = useState<CartProductType[]>([]);

  const requestCartProducts = () => {
    const shoppingCartList = getShoppingCartList();
    setCartProducts(shoppingCartList);
  };

  useEffect(() => {
    requestCartProducts();
  }, []);

  return !cartProducts.length ? (
    <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio.</p>
  ) : (
    cartProducts.map((product) => (
      <ProductCartCard { ...product } key={ product.productID } />
    ))
  );
}

export default ShoppingCart;
