import React from 'react';
import { IShoppingCartUtils } from '../interfaces';
import shoppingCartUtils from '../utils/shoppingCartUtils';

const ShoppingCartContext = React.createContext<IShoppingCartUtils>(shoppingCartUtils());

export default ShoppingCartContext;
