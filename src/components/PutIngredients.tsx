import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Recipe {
  id: number;
  title: string;
  image: string;
}

function IngredientRecipeSearch() {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const apiKey = 'c8e9d92eac8644ba9d4c9b2d1d2a94f0';
  const searchEndpoint = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=`;

  const handleSearch = async () => {
    try {
      const response = await axios.get(searchEndpoint + ingredients);
      setRecipes(response.data);
      console.log('Recipes:', response.data); // Add this line
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };
  

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIngredients(event.target.value);
  };

  const renderRecipes = () => {
    return recipes.map((recipe) => (
      <div key={recipe.id} className="recipe">
        <Link to={`/recipe/${recipe.id}`}>
          <h3 id='recipe-ingredients'>{recipe.title}</h3>
        </Link>
        <Link to={`/recipe/${recipe.id}`}>
          <img
            src={recipe.image}
            alt={recipe.title}
            style={{ width: '200px', height: '200px' }}
          />
        </Link>
      </div>
    ));
  };

  return (
    <div>
      <h2>Search Recipes by Ingredients</h2>
      <div>
        <input
          type="text"
          value={ingredients}
          onChange={handleInputChange}
          placeholder=" separated by commas..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="recipes">
        {recipes.length > 0 ? renderRecipes() : <p>let us see what we can cook today!</p>}
      </div>
    </div>
  );
}


export default IngredientRecipeSearch;
