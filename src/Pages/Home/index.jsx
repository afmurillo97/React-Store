import { useContext, useEffect, useMemo } from 'react';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import Loader from '../../Components/Loader';
import ProductDetail from '../../Components/ProductDetail';

function Home() {

  const context = useContext(ShoppingCartContext);
  const { items, filteredItems, setCategoryRequested, searchByTitle, isLoading } = context;

  // My Categories: Get category name
  const currentPath = window.location.pathname;
  const requestPath = currentPath.split('/').pop();

  const categories = useMemo(() => [
    { name: 'clothes', value: ['men\'s clothing', 'women\'s clothing'] },
    { name: 'electronics', value: ['electronics'] },
    { name: 'jewerly', value: ['jewelery'] },
    { name: 'others', value: [''] },
    { name: '', value: [''] },
  ], []);
    
  useEffect(() => {
    const categoryObject = categories.find(category => category.name === requestPath);
    const categoriesSelected = categoryObject ? categoryObject.value : [];
    setCategoryRequested(prev => {
      // Only update if the selected categories are different
      if (prev.join(',') !== categoriesSelected.join(',')) {
        return categoriesSelected;
      }
      return prev;
    });
  }, [requestPath, categories, setCategoryRequested]);


  const itemsToRender = (searchByTitle.length) > 0 ? filteredItems : items;
  const itemsSize = itemsToRender?.length || 0;

  const RenderView = () => {
    return (itemsToRender?.length > 0) 
      ? itemsToRender.map((item, i) => <Card key={i} data={item} />)
      : <h1 className='font-bold text-3xl'>We Don&apos;t have Anything...</h1>
  }
  
  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-bold text-xl mt-4'>Exclusive Products</h1>
      </div>
      <div className={`${ isLoading || itemsSize === 0 
          ? 'flex items-center justify-center mt-40' 
          : 'grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-lg mx-auto'
      }`}>
        {
          isLoading ? (
            <Loader />
          ) : (
            <RenderView />
          )
        }
      </div>
      <ProductDetail />
    </Layout>
  )
}

export default Home