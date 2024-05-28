import PropTypes from 'prop-types';
import { createContext, useState } from 'react';

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const toogleProductDetail = () => (setIsProductDetailOpen(!isProductDetailOpen));
  
  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      isProductDetailOpen,
      toogleProductDetail
    }}>
      { children }
    </ShoppingCartContext.Provider>
  );

};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { ShoppingCartContext }
