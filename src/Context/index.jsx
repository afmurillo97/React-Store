import PropTypes from 'prop-types';
import { createContext, useState, useEffect, useCallback } from 'react';
import { backupItems } from './fakeProducts';

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  // Estado y funciones para manejar el detalle del producto, el carrito y las órdenes.
  const [count, setCount] = useState(0);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [isProductDetailVisible, setIsProductDetailVisible] = useState(false);
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
  const [isCheckoutSideMenuVisible, setIsCheckoutSideMenuVisible] = useState(false);
  const [productToShow, setProductToShow] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  const [searchByTitle, setSearchByTitle] = useState('');
  const [categoryRequested, setCategoryRequested] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  // Product Detail: Manage data
  const getFirstThreeWords = (text) => {
    const words = text.split(' ');
    const firstThreeWords = words.slice(0, 3);

    return firstThreeWords.join(' ');
  };

  const filteredItemsByTitle = useCallback((items, search) => {
    return items?.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));
  }, []);

  const fetchItemsByCategory = async (category) => {
    const categoryUrl = (category.length) ? 'category/' + category : '';
    const response = await fetch(`https://fakestoreapi.com/products/${categoryUrl}`);
    return response.json();
  };

  // Product Detail: Open/Close modal and manage transitions
  const openProductDetail = () => { setIsProductDetailVisible(true) || setIsProductDetailOpen(true) };
  const closeProductDetail = () => { setIsProductDetailOpen(false) || setTimeout(() => setIsProductDetailVisible(false), 500) }

  const openCheckoutSideMenu = () => { setIsCheckoutSideMenuVisible(true) || setIsCheckoutSideMenuOpen(true) };
  const closeCheckoutSideMenu = () => { setIsCheckoutSideMenuOpen(false) || setTimeout(() => setIsCheckoutSideMenuVisible(false), 500) }

  //API proyect: Get all Items
  useEffect(() => {
    setIsLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setItems(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching API products:', error);
        setItems(backupItems);
        setIsLoading(false);
      })
  }, []);

  //API proyect: Get search term
  useEffect(() => {
    if (searchByTitle) {
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
    }
  }, [items, searchByTitle, filteredItemsByTitle]);

  //API proyect: filter by one or more categories
  useEffect(() => {
    setIsLoading(true);
    const fetchItemsByMultipleCategories = async (categories) => {
      const promises = categories.map(category => fetchItemsByCategory(category));
      const results = await Promise.all(promises);
      return results.flat();
    };

    if (categoryRequested.length > 0) {
      fetchItemsByMultipleCategories(categoryRequested)
        .then(itemsByCategory => {
          setItems(itemsByCategory);
          setIsLoading(false);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
          const filteredBackupItems = backupItems.filter( item => categoryRequested.includes(item.category) )
          setItems(filteredBackupItems.length > 0 ? filteredBackupItems : backupItems);
          setIsLoading(false);
        });
    }
  }, [categoryRequested]);

  return (
    <ShoppingCartContext.Provider value={{
      count,
      isProductDetailOpen,
      isProductDetailVisible,
      isCheckoutSideMenuOpen,
      isCheckoutSideMenuVisible,
      productToShow,
      cartProducts,
      orders,
      items,
      filteredItems,
      searchByTitle,
      categoryRequested,
      getFirstThreeWords,
      setCount,
      setProductToShow,
      setCartProducts,
      openProductDetail,
      closeProductDetail,
      openCheckoutSideMenu,
      closeCheckoutSideMenu,
      setOrders,
      setItems,
      setSearchByTitle,
      setFilteredItems,
      setCategoryRequested,
      isLoading
    }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export { ShoppingCartContext }
