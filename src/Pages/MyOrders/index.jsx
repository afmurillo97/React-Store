import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import OrdersCard from '../../Components/OrdersCard';


function MyOrders() {

  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80'>
        <h1 className='font-bold'>My Orders</h1>
      </div>
      <div className="grid grid-cols-3 gap-4 mx-auto p-4">
        {
          context.orders.map((order, i) => (
            <OrdersCard 
              key={i}
              id={i}
              date={order.date}
              products={order.products}
              totalPrice={order.totalPrice} 
              totalProducts={order.totalProducts}
            />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrders