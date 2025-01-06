import React from 'react';

interface ProductProps {
  id: number;
  name: string;
  price: number;
  description: string;
}

const Product: React.FC<ProductProps> = ({ id, name, price, description }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>ID: {id}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <p>{description}</p>
    </div>
  );
};

export default Product;