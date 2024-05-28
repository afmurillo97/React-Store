import { useState, useEffect } from 'react';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';

function Home() {

  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))

  }, []);

  return (
    <Layout>
      Home
      <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-lg mx-auto'>
        { items?.map((item, i) => (
          <Card 
            key={i}
            data={item}
          />
        )) }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home