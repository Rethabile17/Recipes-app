import React from 'react';
import { useLocation } from 'react-router-dom';
import './RecipeDetail.css'; // Optional: for additional styling

function RecipeDetail() {
  const location = useLocation();
  const { recipe } = location.state; // Get the passed recipe data

  return (
    <div className="recipeDetail">
      <h1>{recipe.foodName}</h1>
      <img src={recipe.image} alt={recipe.foodName} />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
      </ul>
      <h3>Method:</h3>
      <ol>
        {recipe.method.map((step, j) => (
          <li key={j}>{step}</li>
        ))}
      </ol>
      <h3>Serving Suggestions:</h3>
      <p>{recipe.serve}</p>
    </div>
  );
}

export default RecipeDetail;
