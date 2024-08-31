import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Routers = () => {
  return (
    <Routes>
      {/* If you want to redirect from '/' to 'home' */}
      <Route path='/' element={<Navigate to='home' />} />
      
      {/* Correct way to define the 'home' route */}
      <Route path='home' element={<Home />} />
      
      <Route path='shop' element={<Shop />} />
      <Route path='shop/:id' element={<ProductDetails />} />
      <Route path='cart' element={<Cart />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='login' element={<Login />} />
      <Route path='signup' element={<Signup />} />
    </Routes>
  );
};

export default Routers;
