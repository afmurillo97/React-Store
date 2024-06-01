import { XMarkIcon } from "@heroicons/react/24/outline";
import PropTypes from 'prop-types';

const OrderCard = props => {
  const { id, title, imageUrl, price, handleDelete } = props;

  return (
    <div className='flex justify-between items-center py-4'>
      <div className='flex items-center gap-2'>
        <figure className="w-10 h-10 rounded-full overflow-hidden flex justify-center items-center">
          <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm font-light'>{title}</p>
      </div>

      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>{ price }</p>
        {handleDelete && (
          <XMarkIcon 
            onClick={() => handleDelete(id)} 
            className="size-6 cursor-pointer rounded-full hover:bg-red-400 hover:text-white hover:p-1 transition duration-300 ease-in-out" 
          />
        )}
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleDelete: PropTypes.func,
};

export default OrderCard;