import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <header><strong>Home page</strong></header>
      <h1>Welcome to Recipe Finder</h1>
      <p>Here you can find any recipe you need to prepare your meal.</p>
      
      <p>Whether you want to try something you've never heard about before:</p>
      <button className="home-button">
        <Link to="/random" >Random Recipe</Link>
      </button>

      <p>Or you want to find any dish that comes to mind:</p>
      <button className="home-button">
        <Link to="/search" >Search Recipe</Link>
      </button>

      <p>As well as finding what you can prepare with the ingredients you have at home:</p>
      <button className="home-button">
        <Link to="/ingredient-search" >Search By Ingredients</Link>
      </button>
    </div>
  );
};

export default Home;


