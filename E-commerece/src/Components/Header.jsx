import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'; // Import the CSS file for styling

function Header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" className="custom-navbar">
        <Navbar.Brand href="#home" className="custom-brand">
          Navbar
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/add-product" className="custom-link">
            Add Product
          </Link>
          <Link to="/update-product" className="custom-link">
            Update Product
          </Link>
          <Link to="/login" className="custom-link">
            Login
          </Link>
          <Link to="/register" className="custom-link">
            Register
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
