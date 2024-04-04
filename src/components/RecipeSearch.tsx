import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Recipe {
  id: number;
  title: string;
  image: string;
}

function SearchRecipe() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const apiKey = 'c8e9d92eac8644ba9d4c9b2d1d2a94f0';
  const searchEndpoint = `https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=`;

  const handleSearch = async () => {
    try {
      const response = await axios.get(searchEndpoint + query);
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const renderRecipes = () => {
    return recipes.map((recipe) => (
      <div key={recipe.id} className="recipe">
        <Link to={`/recipe/${recipe.id}`}>
          <h3 id='recipe-search'>{recipe.title}</h3>
        </Link>
        <Link to={`/recipe/${recipe.id}`}>
          <img
            src={`https://spoonacular.com/recipeImages/${recipe.image}`}
            alt={recipe.title}
            style={{ width: '200px', height: '200px' }}
          />
        </Link>
      </div>
    ));
  };

  return (
    <div>
      <h2>Search Recipes</h2>
      <div>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for recipes..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="recipes">
        {recipes.length > 0 ? renderRecipes() : <p>what do you want to cook?</p>}
      </div>
    </div>
  );
}

export default SearchRecipe;


