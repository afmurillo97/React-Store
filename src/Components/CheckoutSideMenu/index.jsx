import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, CreditCardIcon } from '@heroicons/react/20/solid';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import { totalPrice } from '../../utils';
import './styles.css';

const CheckoutSideMenu = () => {

  const context = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id !== id);

    context.setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrders([...context.orders, orderToAdd]);
    context.setCartProducts([]);
    context.closeCheckoutSideMenu();
  };

  return (

    context.isCheckoutSideMenuVisible && (
      <aside 
        className={`${context.isCheckoutSideMenuOpen ? 'animate-fadeInUp' : 'animate-fadeOutDown'} checkout-side-menu flex flex-col fixed right-0 top-0 mt-20 border-4 border-red-400 rounded-lg bg-white overflow-y-auto hover:overflow-y-scroll max-h-screen`}
      >
        <div className='flex justify-between items-center p-6'>
          <h2 className='font-medium text-xl'>My Order</h2>
          <div 
            className='checkout-side-menu-close'
            onClick={() => context.closeCheckoutSideMenu()}
          >
            <XMarkIcon className='size-6' />
          </div>
        </div>

        <div className='px-6'>
          <p className='flex justify-between items-center'>
            <span className='font-light'>Total: </span>
            <span className='font-medium text-2xl'>${totalPrice(context.cartProducts)}</span>
          </p>
          {(context.cartProducts.length > 0) && (
            <Link to='/my-orders/last'>
              <button
                className='group flex items-center justify-center w-11 h-11 bg-black rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-full hover:rounded-lg active:translate-x-1 active:translate-y-1'
                onClick={() => handleCheckout()}
              >
                <div
                  className='flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3'
                >
                  <CreditCardIcon className='size-6' fill='white'/>
                </div>
                <div
                  className='absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100'
                >
                  Checkout
                </div>
              </button>
            </Link>
          )}
        </div>

        <div className='border-t-2 border-red-400 m-4'></div>

        <div className='px-6'>
          {
            context.cartProducts.map(product => (
              <OrderCard 
                key={product.id}
                id={product.id}
                title={context.getFirstThreeWords(product.title)} 
                imageUrl={product.image} 
                price={product.price}
                handleDelete={handleDelete}
              />
            ))
          }
        </div>
      </aside>
    )

  );

};

export default CheckoutSideMenu;