// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link to="/" className="navbar-brand">Discovery SICCA</Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/historic">Historic</NavItem>
          <NavItem to="/add">Add</NavItem>
          <NavItem to="/tourism">Tourism</NavItem>
        </ul>

        {/* Search Form */}
        <SearchForm />
      </div>
    </nav>
  );
}

const NavItem = ({ to, children }) => (
  <li className="nav-item">
    <Link to={to} className="nav-link">{children}</Link>
  </li>
);

const SearchForm = () => (
  <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-search my-2 my-sm-0" type="submit">Search</button>
  </form>
);

export default Navbar;
