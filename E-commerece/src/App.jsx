import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header.jsx';  // Assuming Header is in the same directory
import Login from './Components/Login.jsx';
import AddProduct from './Components/AddProduct.jsx';
import UpdateProduct from './Components/UpdateProduct.jsx';    // Assuming Login is in the same directory

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* Header component (Navbar) */}
        <Header />

        {/* Main content */}
        <h1>E-Commerce</h1>

        {/* Routes for different pages */}
        <Routes>
          {/* Define the route for Login page */}
          <Route path="/login" element={<Login />} />
          
          {/* You can add more routes here */}
          {/* Example route for Add Product */}
          <Route path="/add-product" element={<AddProduct />} />
          {/* Example route for Update Product */}
          <Route path="/update-product" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
