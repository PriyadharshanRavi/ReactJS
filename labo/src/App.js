import React from 'react';
import Product from './Product';
import productdata from './vschoolProducts';

function App() {
  const productComponent = productdata.map(item =>
    <Product 
    key={item.id}
    product={item} 
    />
  )
  return (
    <div className="root">
      {productComponent}
    </div>
  );
}

export default App;
