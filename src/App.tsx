import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

import shoppingCartUtils from './utils/shoppingCartUtils';

import ShoppingCartContext from './contexts/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartContext.Provider value={ shoppingCartUtils() }>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path="/search/:category/:query?" element={ <Home /> } />
          <Route path="/product/:id" element={ <ProductDetails /> } />
          <Route path="/shoppingcart" element={ <ShoppingCart /> } />
        </Route>
      </Routes>
    </ShoppingCartContext.Provider>
  );
}

export default App;
