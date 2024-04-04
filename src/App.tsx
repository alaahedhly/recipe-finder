import React from 'react';
import NavBar from './NavBar';
import RandomRecipe from './components/RandomRecipe';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import RecipeSearch from './components/RecipeSearch';
import './App.css';
import RecipeDetails from './components/RecipeDetails';
import IngredientRecipeSearch from './components/PutIngredients';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} id="home"/>
          <Route path="/search" element={<RecipeSearch />} />
          <Route path="/ingredient-search" element={<IngredientRecipeSearch />} />
          <Route path="/random" element={<RandomRecipe />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;
