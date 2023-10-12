import { TipodeCartaoProduto, ShoppingCartUtils } from '../types';

const fun01 = (): TipodeCartaoProduto[] => {
  // Obtém a lista de produtos do carrinho do armazenamento local
  const json = localStorage.getItem('shopping-cart-list');

  // Converte a lista de produtos de JSON para um array ou retorna um array vazio se não existir
  return JSON.parse(json ?? '[]');
};

const setListaLoja = (shoppingCartList: TipodeCartaoProduto[]) => {
  // Converte a lista de produtos para JSON e a armazena no armazenamento local
  const json = JSON.stringify(shoppingCartList);
  localStorage.setItem('shopping-cart-list', json);
};

const fun03 = (product: TipodeCartaoProduto) => {
  // Adiciona um produto à lista do carrinho
  const shoppingCartList = fun01();
  shoppingCartList.push(product);
  setListaLoja(shoppingCartList);
};

const fun04 = (productID: string) => {
  // Remove um produto da lista do carrinho
  const shoppingCartList = fun01();
  const shoppingCartListWithoutProductSelected = shoppingCartList
    .filter(({ productID: id }) => id !== productID);
  setListaLoja(shoppingCartListWithoutProductSelected);

  // Recarrega a página para refletir a alteração
  window.location.reload();
};

const fun05 = (productID: string, quantityUpdate: number) => {
  // Edita a quantidade de um item no carrinho
  const shoppingCartList = fun01();
  const productIndex = shoppingCartList
    .findIndex(({ productID: id }) => id === productID);
  const productSelected = shoppingCartList[productIndex];

  if (productSelected.quantity === 1 && quantityUpdate < 0) return;
  productSelected.quantity += quantityUpdate;
  shoppingCartList[productIndex] = productSelected;
  setListaLoja(shoppingCartList);

  // Recarrega a página para refletir a alteração
  window.location.reload();
};

// Função utilitária que retorna um objeto com funcionalidades do carrinho de compras
export default function shoppingCartUtils(): ShoppingCartUtils {
  const pegaListaLoja = fun01;

  // const setShoppingCartList = fun02;

  const adicionaProduto = fun03;

  const removeProduto = fun04;

  const editQuantidadeItem = fun05;

  const incrementCartItem = (productID: string) => editQuantidadeItem(productID, 1);
  const decrementCartItem = (productID: string) => editQuantidadeItem(productID, -1);

  return {
    getShoppingCartList: pegaListaLoja,
    addCartProduct: adicionaProduto,
    removeCartProduct: removeProduto,
    incrementCartItem,
    decrementCartItem,
  };
}
