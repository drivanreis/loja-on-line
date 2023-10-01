import { CartProductType } from './types';

export interface IShoppingCartUtils {
  getShoppingCartList(): CartProductType[];
  addCartProduct(product: CartProductType): void;
  removeCartProduct(productID: string): void;
  incrementCartItem(productID: string): void;
  decrementCartItem(productID: string): void;
}
