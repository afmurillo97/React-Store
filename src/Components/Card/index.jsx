import { PlusIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const Card = ({ data }) => {

  const context = useContext(ShoppingCartContext);

  function getFirstThreeWords(text) {
    const words = text.split(' ');
    const firstThreeWords = words.slice(0, 3);

    return firstThreeWords.join(' ');
  }

  return (
    <div 
      className='bg-white cursor-pointer w-44 h-50 rounded-lg'
      onClick={() => context.toogleProductDetail(false)}
    >
      <figure className='relative md-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{ data.category }</span>
        <img className='w-full h-full object-cover rounded-lg' src={ data.image } alt={ data.title } />
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-red-400 bg-opacity-40 w-8 h-8 rounded-full m-2 p-1'
          onClick={() => 
            context.setCount(context.count + 1)
          }
        >
          <PlusIcon className='size-5'/>
        </div>
      </figure>
      <p className='flex justify-between'>
        <span className='text-xs font-light'>{ getFirstThreeWords(data.title) }</span>
        <span className='text-sm font-medium'>${ data.price }</span>
      </p>
    </div>
  );

};

Card.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Card;