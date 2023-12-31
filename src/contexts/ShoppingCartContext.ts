import React from 'react';
import { IShoppingCartUtils } from '../interfaces';
import shoppingCartUtils from '../utils/shoppingCartUtils';

// Cria um contexto do carrinho de compras com o utilitário de carrinho de compras padrão
const ContestoLoja = React.createContext<IShoppingCartUtils>(shoppingCartUtils());

export default ContestoLoja;
