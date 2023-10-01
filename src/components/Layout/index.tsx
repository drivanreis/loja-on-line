import React from 'react';
import { Outlet } from 'react-router-dom';

import SearchBar from '../SearchBar';
import Logo from '../Logo';
import ShoppingCartLink from '../ShoppingCartLink';

// O componente Layout define a estrutura básica da página
function Layout() {
  return (
    <>
      {/* Cabeçalho da página */}
      <header>
        {/* Barra de pesquisa */}
        <SearchBar />

        {/* Logo da loja */}
        <Logo />

        {/* Link para o carrinho de compras */}
        <ShoppingCartLink />
      </header>

      {/* Conteúdo principal da página */}
      <main>
        {/* O Outlet é um ponto de saída para as rotas aninhadas */}
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
