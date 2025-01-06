import React from 'react';
import Product from './Product'; 

const ProductList: React.FC = () => {
  const products = [
    { id: 1, name: 'Phone', price: 999, description: 'A great smartphone' },
    { id: 2, name: 'Laptop', price: 1499, description: 'A powerful laptop' },
  ];

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <Product key={product.id} {...product} /> 
      ))}
    </div>
  );
};

export default ProductList;