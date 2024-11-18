import React, { useState } from 'react';
import ProductList from './ProductList';
import AddProductForm from './AddProductForm';

function App() {
  // product list
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 20, description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', price: 40, description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', price: 60, description: 'Description of Product 3' }
  ]);

  // Function to handle adding new products
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="App">
      <h1>Product Dashboard</h1>
      {/* Render the AddProductForm component */}
      <AddProductForm addProduct={addProduct} />
      {/* Render the ProductList component */}
      <ProductList products={products} />
    </div>
  );
}

export default App;