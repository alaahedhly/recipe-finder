import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

interface RecipeDetails {
  title: string;
  image: string;
  extendedIngredients: { name: string }[];
  analyzedInstructions: { steps: { step: string }[] }[];
}

function RecipeDetailsPage() {
  const { recipeId } = useParams<{ recipeId: string }>();
  const [recipeDetails, setRecipeDetails] = useState<RecipeDetails | null>(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information`, {
          params: {
            apiKey: 'c8e9d92eac8644ba9d4c9b2d1d2a94f0',
          },
        });
        setRecipeDetails({
          title: response.data.title,
          image: response.data.image,
          extendedIngredients: response.data.extendedIngredients,
          analyzedInstructions: response.data.analyzedInstructions,
        });
      } catch (error) {
        console.error('Error fetching recipe details:', error);
      }
    };

    fetchRecipeDetails();
  }, [recipeId]);

  return (
    <div >
      {recipeDetails && (
        <div>
          <div>
            
              <h2 id='recipe-details'>{recipeDetails.title}</h2>
            
          </div>
          <img src={recipeDetails.image} alt={recipeDetails.title} />

          <div className="ingredients">
            <div>Ingredients needed:</div>
            {recipeDetails.extendedIngredients.map((ingredient, index) => (
              <span key={index}>
                {index !== recipeDetails.extendedIngredients.length - 1 ? ingredient.name + ', ' : ingredient.name}
              </span>
            ))}
          </div>
          <div>
            {recipeDetails.analyzedInstructions.map((instruction, index) => (
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

export default RecipeDetailsPage;
