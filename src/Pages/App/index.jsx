import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import Navbar from '../../Components/Navbar';
import CheckoutSideMenu from '../../Components/CheckoutSideMenu';
import './App.css';

const AppRoutes = () => {

  const base = '/react-store';
  
  let routes = useRoutes([
    { path: base, element: <Home /> },
    { path: `${base}/my-account`, element: <MyAccount /> },
    { path: `${base}/my-order`, element: <MyOrder /> },
    { path: `${base}/my-orders`, element: <MyOrders /> },
    { path: `${base}/my-orders/last`, element: <MyOrder /> },
    { path: `${base}/my-orders/:id`, element: <MyOrder /> },
    { path: `${base}/clothes`, element: <Home /> },
    { path: `${base}/electronics`, element: <Home /> },
    { path: `${base}/jewerly`, element: <Home /> },
    { path: `${base}/others`, element: <Home /> },
    { path: `${base}/sign-in`, element: <SignIn /> },
    { path: `${base}/*`, element: <NotFound /> }
    
  ]);

  return routes;

};

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  );

};

export default App
