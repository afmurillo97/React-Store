import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Product Detail: Manage data
  const getFirstThreeWords = (text) => {
    const words = text.split(' ');
    const firstThreeWords = words.slice(0, 3);

    return firstThreeWords.join(' ');
  };

  // Product Detail: Cart counter
  const [count, setCount] = useState(0);
  
  // Product Detail: Open/Close aside
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isProductDetailVisible, setIsProductDetailVisible] = useState(false);
  const openProductDetail  = () => {
    setIsProductDetailVisible(true);
    setIsProductDetailOpen(true);
  };
  const closeProductDetail  = () => {
    setIsProductDetailOpen(false);
    setTimeout(() => {
      setIsProductDetailVisible(false);
    }, 500)
  };

  // Checkout Side Menu: Open/Close aside
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const [isCheckoutSideMenuVisible, setIsCheckoutSideMenuVisible] = useState(false);
  const openCheckoutSideMenu  = () => {
    setIsCheckoutSideMenuVisible(true);
    setIsCheckoutSideMenuOpen(true);
  };
  const closeCheckoutSideMenu  = () => {
    setIsCheckoutSideMenuOpen(false);
    setTimeout(() => {
      setIsCheckoutSideMenuVisible(false);
    }, 500)
  };
  
  // Product Detail: Show Product
  const [productToShow, setProductToShow] = useState({});

  // Product Detail: Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  //Shopping Cart: Order
  const [orders, setOrders] = useState([]);

  return (
    <ShoppingCartContext.Provider value={{
      getFirstThreeWords,
      count,
      isProductDetailOpen,
      isProductDetailVisible,
      isCheckoutSideMenuOpen,
      isCheckoutSideMenuVisible,
      productToShow,
      cartProducts,
      setCount,
      setProductToShow,
      setCartProducts,
      openProductDetail,
      closeProductDetail,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      orders,
      setOrders
    }}>
      { children }
    </ShoppingCartContext.Provider>
  );

};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { ShoppingCartContext }
