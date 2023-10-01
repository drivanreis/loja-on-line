import { CartProductType } from '../types';

type ShoppingCartUtils = {
  getShoppingCartList: () => CartProductType[];
  addCartProduct: (product: CartProductType) => void;
  removeCartProduct: (productID: string) => void;
  incrementCartItem: (productID: string) => void;
  decrementCartItem: (productID: string) => void;
};

export default function shoppingCartUtils(): ShoppingCartUtils {
  const getShoppingCartList = (): CartProductType[] => {
    const json = localStorage.getItem('shopping-cart-list');
    return JSON.parse(json ?? '[]');
  };

  const setShoppingCartList = (shoppingCartList: CartProductType[]) => {
    const json = JSON.stringify(shoppingCartList);
    localStorage.setItem('shopping-cart-list', json);
  };

  const addCartProduct = (product: CartProductType) => {
    const shoppingCartList = getShoppingCartList();
    shoppingCartList.push(product);
    setShoppingCartList(shoppingCartList);
  };

  const removeCartProduct = (productID: string) => {
    const shoppingCartList = getShoppingCartList();
    const shoppingCartListWithoutProductSelected = shoppingCartList
      .filter(({ productID: id }) => id !== productID);
    setShoppingCartList(shoppingCartListWithoutProductSelected);
    window.location.reload();
  };

  const editCartItemQuantity = (productID: string, quantityUpdate: number) => {
    const shoppingCartList = getShoppingCartList();
    const productIndex = shoppingCartList
      .findIndex(({ productID: id }) => id === productID);
    const productSelected = shoppingCartList[productIndex];

    if (productSelected.quantity === 1 && quantityUpdate < 0) return;
    productSelected.quantity += quantityUpdate;
    shoppingCartList[productIndex] = productSelected;
    setShoppingCartList(shoppingCartList);
    window.location.reload();
  };

  const incrementCartItem = (productID: string) => editCartItemQuantity(productID, 1);
  const decrementCartItem = (productID: string) => editCartItemQuantity(productID, -1);

  return {
    getShoppingCartList,
    addCartProduct,
    removeCartProduct,
    incrementCartItem,
    decrementCartItem,
  };
}
