import ProductCard from '../components/ProductCard';

const product = {
  id: '1',
  title: 'Cherry Cake',
  img: 'https://images.unsplash.com/photo-1625579437459-12c5f5762142?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
};

const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping store</h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ProductCard product={product} />
      </div>
    </div>
  );
};

export default ShoppingPage;
