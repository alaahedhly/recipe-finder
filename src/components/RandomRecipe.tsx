import React, { useEffect, useState } from 'react';
import axios from 'axios';


interface Recipe {
    title: string;
    sourceUrl: string;
    image: string;
    extendedIngredients: { name: string }[];
    analyzedInstructions: { steps: { step: string }[] }[];
  }

function RandomRecipe() {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  
  async function getRandomRecipe() {
    try {
      
      const apiKey = 'c8e9d92eac8644ba9d4c9b2d1d2a94f0';

      
      let resp = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`);
      console.log(21, resp.data);

      
      setRecipe(resp.data.recipes[0]);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getRandomRecipe();
  }, []);

  return (
    <div className="row">
      <button onClick={getRandomRecipe} id="randombtn">Generate Random Recipe</button>

      {recipe && (
        <div>
          <div>
            Name:
            <a target="_blank" rel="noreferrer" href={recipe.sourceUrl} id="recipe-random">
              {recipe.title}
            </a>
          </div>
          <img src={recipe.image} alt={recipe.title} />

          <div className="ingredients">
            <div>Ingredients needed:</div>
            {recipe.extendedIngredients.map((ingredient, index) => (
              <span key={index}>
                {index !== recipe.extendedIngredients.length - 1 ? ingredient.name + ', ' : ingredient.name}
              </span>
            ))}
          </div>
          <div>
            {recipe.analyzedInstructions.map((instruction, index) => (
              <div key={index}>
                <div>Instructions:</div>
                <ol>
                  {instruction.steps.map((step, index) => (
                    <li key={index}>{step.step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default RandomRecipe;
