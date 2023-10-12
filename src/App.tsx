import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

import shoppingCartUtils from './utils/shoppingCartUtils';

import ContestoLoja from './contexts/ShoppingCartContext';

import './App.css';

function App() {
  return (
    <div className="corpo">
      {/* Fornece o contexto do carrinho de compras para todo o aplicativo */}
      <ContestoLoja.Provider value={ shoppingCartUtils() }>
        <Routes>
          <Route path="/" element={ <Layout /> }>
            {/* Rota inicial que renderiza a página inicial */}
            <Route index element={ <Home /> } />

            {/* Rota para pesquisa de produtos por categoria e consulta */}
            <Route path="/search/:category/:query?" element={ <Home /> } />

            {/* Rota para exibir detalhes de um produto */}
            <Route path="/product/:id" element={ <ProductDetails /> } />

            {/* Rota para o carrinho de compras */}
            <Route path="/shoppingcart" element={ <ShoppingCart /> } />
          </Route>
        </Routes>
      </ContestoLoja.Provider>
    </div>
  );
}

export default App;
