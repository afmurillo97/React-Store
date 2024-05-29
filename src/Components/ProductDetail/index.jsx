import { XMarkIcon } from '@heroicons/react/20/solid';
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';
import './styles.css';

const ProductDetail = () => {

  const context = useContext(ShoppingCartContext);

  // Animations available: slideInRight, fadeInUp, scaleIn
  const openProductDetailClasses = context.isProductDetailOpen ? 'animate-slideInRight' : 'animate-slideOutLeft';

  return (

    context.isProductDetailVisible && (
      <aside 
        className={`${openProductDetailClasses} product-detail flex flex-col fixed right-0 top-0 mt-20 border-4 border-red-400 rounded-lg bg-white overflow-y-auto hover:overflow-y-scroll max-h-screen`}
      >
        <div className='flex justify-between items-center p-6'>
          <h2 className='font-medium text-xl'>Detail</h2>
          <div 
            className='product-detail-close'
            onClick={() => context.closeProductDetail()}
          >
            <XMarkIcon className='size-6' />
          </div>
        </div>

        <figure className='px-6 justify-center items-center'>
          <img 
            className='w-full max-h-48 max-w-full object-contain rounded-lg' 
            src={ context.productToShow.image } 
            alt={ context.productToShow.title } 
          />
        </figure>

        <div className='flex flex-col p-6 space-y-2'>
          <span className='font-bold text-3xl text-green-500 px-2 rounded-md bg-white'>
            ${context.productToShow.price}
          </span>
          <span className='font-semibold text-xl text-gray-800 px-2 rounded-md bg-white'>
            {context.productToShow.title}
          </span>
          <div className='border-t-2 border-red-400 my-4'></div>
          <textarea
            className='font-light text-sm w-full h-32 resize-none p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-400 shadow-inner'
            readOnly
            value={context.productToShow.description}
          />
        </div>
      </aside>
    )
    
  );

};

export default ProductDetail;