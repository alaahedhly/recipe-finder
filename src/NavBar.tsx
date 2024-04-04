import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Recipe Finder</h1>
      <div className="Links">
        <Link to="/">Home</Link>
        <Link to="/random">Random Recipe</Link>
        <Link to="/search">Search Recipe</Link>
        <Link to="/ingredient-search"> Search By Ingredient</Link>
      </div>
    </nav>
  );
}

export default NavBar;
