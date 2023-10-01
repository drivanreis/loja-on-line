import { CartProductType } from '../types';

// Defina um tipo que represente as funcionalidades do carrinho de compras
type ShoppingCartUtils = {
  getShoppingCartList: () => CartProductType[];
  addCartProduct: (product: CartProductType) => void;
  removeCartProduct: (productID: string) => void;
  incrementCartItem: (productID: string) => void;
  decrementCartItem: (productID: string) => void;
};

// Função utilitária que retorna um objeto com funcionalidades do carrinho de compras
export default function shoppingCartUtils(): ShoppingCartUtils {
  const getShoppingCartList = (): CartProductType[] => {
    // Obtém a lista de produtos do carrinho do armazenamento local
    const json = localStorage.getItem('shopping-cart-list');
    
    // Converte a lista de produtos de JSON para um array ou retorna um array vazio se não existir
    return JSON.parse(json ?? '[]');
  };

  const setShoppingCartList = (shoppingCartList: CartProductType[]) => {
    // Converte a lista de produtos para JSON e a armazena no armazenamento local
    const json = JSON.stringify(shoppingCartList);
    localStorage.setItem('shopping-cart-list', json);
  };

  const addCartProduct = (product: CartProductType) => {
    // Adiciona um produto à lista do carrinho
    const shoppingCartList = getShoppingCartList();
    shoppingCartList.push(product);
    setShoppingCartList(shoppingCartList);
  };

  const removeCartProduct = (productID: string) => {
    // Remove um produto da lista do carrinho
    const shoppingCartList = getShoppingCartList();
    const shoppingCartListWithoutProductSelected = shoppingCartList
      .filter(({ productID: id }) => id !== productID);
    setShoppingCartList(shoppingCartListWithoutProductSelected);
    
    // Recarrega a página para refletir a alteração
    window.location.reload();
  };

  const editCartItemQuantity = (productID: string, quantityUpdate: number) => {
    // Edita a quantidade de um item no carrinho
    const shoppingCartList = getShoppingCartList();
    const productIndex = shoppingCartList
      .findIndex(({ productID: id }) => id === productID);
    const productSelected = shoppingCartList[productIndex];

    if (productSelected.quantity === 1 && quantityUpdate < 0) return;
    productSelected.quantity += quantityUpdate;
    shoppingCartList[productIndex] = productSelected;
    setShoppingCartList(shoppingCartList);
    
    // Recarrega a página para refletir a alteração
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
