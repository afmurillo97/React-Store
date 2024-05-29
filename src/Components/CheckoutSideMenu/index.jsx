import { XMarkIcon } from '@heroicons/react/20/solid';
import { ShoppingCartContext } from '../../Context';
import OrderCard from '../../Components/OrderCard';
import { totalPrice } from '../../utils';
import { useContext } from 'react';
import './styles.css';

const CheckoutSideMenu = () => {

  const context = useContext(ShoppingCartContext);

  const openCheckoutSideMenu = context.isCheckoutSideMenuOpen ? 'animate-fadeInUp' : 'animate-fadeOutDown';

  return (

    context.isCheckoutSideMenuVisible && (
      <aside 
        className={`${openCheckoutSideMenu} checkout-side-menu flex flex-col fixed right-0 top-0 mt-20 border-4 border-red-400 rounded-lg bg-white overflow-y-auto hover:overflow-y-scroll max-h-screen`}
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
        </div>

        <div className='border-t-2 border-red-400 m-4'></div>

        <div className='px-6'>
          {
            context.cartProducts.map(product => (
              <OrderCard 
                key={product.id}
                title={context.getFirstThreeWords(product.title)} 
                imageUrl={product.image} 
                price={product.price}
              />
            ))
          }
        </div>
      </aside>
    )

  );

};

export default CheckoutSideMenu;