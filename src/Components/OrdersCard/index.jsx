import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrencyDollarIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import { ShoppingCartContext } from '../../Context';
import PropTypes from 'prop-types';
import './styles.css';

const OrdersCard = props => {
  const context = useContext(ShoppingCartContext);
  const { id, date, products, totalPrice } = props;

  const [isOrderVisible, setOrderVisibility] = useState(false);

  const toogleOrderSatus = () => {
    setOrderVisibility(!isOrderVisible);
  };

  const renderOrderButton = isOrderVisible 
    ? (<>
        <button onClick={toogleOrderSatus} className='order_button'>
          Less Info
        </button>
        <Link to={`/my-orders/${id}`} className='order_link'>
          See Detail
        </Link>
    </>)
    : (<button onClick={toogleOrderSatus} className='order_button'>More Info</button>);



  return (
    <article className={`order ${isOrderVisible ? 'active' : ''}`}>
      <section className='order__half upper'>
        <p className='order_paragraph'>Order ID: <strong>XZ8W4N2Q</strong></p>
        <h1 className='order_title'><CurrencyDollarIcon className='size-5'/>{totalPrice}</h1>
        <p className='order_paragraph sm'><CalendarDaysIcon className='size-5'/>{`${date} - 09:47`}</p>

        <div className='order__content'>
          <table className='order_table'>
            <tbody>
              {products.map((product, i) => (
                <tr key={i} className='order_tr'>
                  <td>{context.getFirstThreeWords(product.title)}</td>
                  <td>${product.price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={`${isOrderVisible ? 'links' : 'order__half'} lower`}>
        { renderOrderButton }
      </section>
    </article>
  );
};

OrdersCard.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  totalPrice: PropTypes.string.isRequired,
  totalProducts: PropTypes.number,
};

export default OrdersCard;