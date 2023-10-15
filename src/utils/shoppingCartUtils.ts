import { TipodeCartaoProduto, LojaCardUtils } from '../types';

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
  const cardListdaLoja = fun01();
  cardListdaLoja.push(product);
  setListaLoja(cardListdaLoja);
};

const fun04 = (productID: string) => {
  // Remove um produto da lista do carrinho
  const lojaCartList = fun01();
  const cardListDaLojaSemProdutoSelecionado = lojaCartList
    .filter(({ productID: id }) => id !== productID);
  setListaLoja(cardListDaLojaSemProdutoSelecionado);

  // Recarrega a página para refletir as alterações, funciona.
  // Mas não acho legal. É muito "grosseiro". E não esta passando no teste.
  // window.location.reload();
};

const fun05 = (productID: string, quantityUpdate: number) => {
  // Edita a quantidade de um item no carrinho
  const cardListdaLoja = fun01();
  const productIndex = cardListdaLoja
    .findIndex(({ productID: id }) => id === productID);
  const produtoSelecionado = cardListdaLoja[productIndex];

  if (produtoSelecionado.quantity === 1 && quantityUpdate < 0) return;
  produtoSelecionado.quantity += quantityUpdate;
  cardListdaLoja[productIndex] = produtoSelecionado;
  setListaLoja(cardListdaLoja);

  // Recarrega a página para refletir as alterações, funciona.
  // Mas não acho legal. É muito "grosseiro". E não esta passando no teste.
  // window.location.reload();
};

// Função utilitária que retorna um objeto com funcionalidades do carrinho de compras
export default function shoppingCartUtils(): LojaCardUtils {
  const pegaListaLoja = fun01;

  // const setShoppingCartList = fun02;

  const adicionaProduto = fun03;

  const removeProduto = fun04;

  const editQuantidadeItem = fun05;

  const incrementCartItem = (productID: string) => editQuantidadeItem(productID, +1);
  const decrementCartItem = (productID: string) => editQuantidadeItem(productID, -1);

  return {
    getShoppingCartList: pegaListaLoja,
    addCartProduct: adicionaProduto,
    removeCartProduct: removeProduto,
    incrementCartItem,
    decrementCartItem,
  };
}
