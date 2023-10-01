import { Outlet } from 'react-router-dom';

import SearchBar from '../SearchBar';
import Logo from '../Logo';
import ShoppingCartLink from '../ShoppingCartLink';

function Layout() {
  return (
    <>
      <header>
        <SearchBar />
        <Logo />
        <ShoppingCartLink />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
