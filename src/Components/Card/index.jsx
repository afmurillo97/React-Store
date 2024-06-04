import { CheckBadgeIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import IconPlus from '../Icons/IconPlus';

const Card = ({ data }) => {

  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.closeCheckoutSideMenu();
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  const addProductToCart = (event, productData) => {
    event.stopPropagation();
    context.closeProductDetail();

    const products = context.cartProducts;
    const exists = products.some(item => item.id === productData.id);

    if (!exists) {
      context.setCartProducts([productData, ...products]);
      context.setCount(context.count + 1);
    }
    
    context.openCheckoutSideMenu();
  };

  const renderIcon = (id) => {
    const productObj = context.cartProducts.find(product => product.id === id);

    const icon = (productObj === undefined) ? 
      <IconPlus title='Add Product'/> : <CheckBadgeIcon className='size-5'/>;

    const style = (productObj === undefined) 
      ? 'bg-red-400 bg-opacity-40 hover:bg-red-400 hover:text-white transition duration-300 ease-in-out' 
      : 'bg-green-500 cursor-not-allowed';

    return (
      <div 
          className={`${style} absolute top-0 right-0 flex justify-center items-center w-8 h-8 rounded-full m-2 p-1`}
          onClick={(event) => addProductToCart(event, data)}
        >
          { icon }
      </div>
    );
  };

  return (
    <div 
      className='bg-white cursor-pointer w-44 h-50 rounded-lg'
      onClick={() => showProduct(data)}
    >
      <figure className='relative md-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{ data.category }</span>
        <img className='w-full h-full object-cover rounded-lg' src={ data.image } alt={ data.title } title={ data.description }/>
        { renderIcon(data.id) }
      </figure>
      <p className='flex justify-between'>
        <span className='text-xs font-light' title={data.title}>{ context.getFirstThreeWords(data.title) }</span>
        <span className='text-sm font-medium'>${ data.price }</span>
      </p>
    </div>
  );

};

Card.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;