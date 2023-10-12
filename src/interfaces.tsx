import { TipodeCartaoProduto } from './types';

export interface IShoppingCartUtils {
  getShoppingCartList(): TipodeCartaoProduto[];
  addCartProduct(product: TipodeCartaoProduto): void;
  removeCartProduct(productID: string): void;
  incrementCartItem(productID: string): void;
  decrementCartItem(productID: string): void;
}
