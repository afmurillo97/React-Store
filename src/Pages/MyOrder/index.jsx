import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import { IconBarcode } from '../../Components/Icons/IconBarcode';

function MyOrder() {

  const context = useContext(ShoppingCartContext);

  // My Orders: Get order id
  const currentPath = window.location.pathname;
  const requestPath = currentPath.split('/').pop(); 
  
  const index = requestPath === 'last' ? context.orders?.length - 1 : parseInt(requestPath, 10);

  const order = context.orders?.[index];
  const products = order?.products || [];

  return (
    <Layout>
      {order && (
        <div className='max-w-lg mx-auto p-6 mt-6 bg-white shadow-md rounded-lg'>
          <header className='mb-4'>
            <div className='flex items-center justify-between'>
              <div className='w-1/4'>
                <Link to='/my-orders' title='Back to my orders'>
                  <ChevronLeftIcon className='size-10 rounded-full hover:bg-red-400 hover:text-white hover:transition-colors hover:duration-500 ease-in-out' />
                </Link>
              </div>
              <div className='text-sm text-gray-500'>
                <div className='text-right'>{order.date}</div>
                <div className='text-right'>Ticket ID: XZ8W4N2Q</div>
              </div>
            </div>
            <div className='mt-4 bg-white p-4 border-l-4 border-red-400'>
              <div className='font-bold text-lg'>Hi, Afmurillo97</div>
              <div className='text-gray-600'>You&apos;ve purchased {order.totalProducts} items in our store.</div>
            </div>
          </header>
          <div className='w-full border-t-2 border-dashed border-red-400 my-4'></div>
          <section className='bg-white p-4'>
            <h2 className='text-center font-bold mb-4'>Cart:</h2>
            <ol className='list-decimal pl-4'>
              {products.map((product) => (
                <li key={product.id} className='flex justify-between border-b border-dashed py-2 last:border-none'>
                  <span>{product.title}</span>
                  <span className='font-bold ml-1'>${product.price.toFixed(2)}</span>
                </li>
              ))}
            </ol>
            <hr className='my-4 border-b-4 border-yellow-200' />
            <footer className='flex justify-between font-bold'>
              <span>Total</span>
              <span>${order.totalPrice}</span>
            </footer>
          </section>
          <div className='w-full border-t-2 border-dashed border-red-400 my-4'></div>
          <footer className='flex justify-center py-4'>
            <IconBarcode/>
          </footer>
        </div>
      )}
    </Layout>
  );
}

export default MyOrder