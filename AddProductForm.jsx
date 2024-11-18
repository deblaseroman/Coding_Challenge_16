import React, { useState } from 'react';

function AddProductForm({ addProduct }) {
  // State for the form fields
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new product object
    const newProduct = {
      id: Date.now(), // Use current time as a unique ID
      name,
      price: parseFloat(price),
      description,
    };

    // Add the new product to the list
    addProduct(newProduct);

    // Clear the form fields
    setName('');
    setPrice('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Product</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

      </div>


      <div>
        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;