import { XMarkIcon } from '@heroicons/react/20/solid';
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';
import './styles.css';

const ProductDetail = () => {

  const context = useContext(ShoppingCartContext);

  const openProductDetail = context.isProductDetailOpen ? 'flex' : 'hidden';

  return (
    <aside 
      className={`${openProductDetail} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div 
          className='product-close-detail cursor-pointer'
          onClick={() => context.toogleProductDetail(true)}
        >
          <XMarkIcon className='size-6' />
        </div>
      </div>
    </aside>
  );

};

export default ProductDetail;