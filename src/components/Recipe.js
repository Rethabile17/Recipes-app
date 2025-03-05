import React from 'react';
import { useLocation } from 'react-router-dom';
import './RecipeDetail.css'; 

function RecipeDetail() {
  const location = useLocation();

  console.log(location)
  const { recipe } = location.state; 

  return (
    <div className="recipeDetail">
  <h1>{location.state.foodName}</h1>
  <img src={location.state.image} alt={location.state.image} />
  <h3>Ingredients:</h3>
  <ul>
    {location.state.ingredients.map((ingredient, i) => (
      <li key={i}>{ingredient}</li>
    ))}
  </ul>
  <h3>Method:</h3>
  <ol>
    {location.state.method.map((step, j) => (
      <li key={j}>{step}</li>
    ))}
  </ol>
  {/* <h3>Preparation Time:</h3>
  <p>{recipe.PreparationTime}</p>
  <h3>Cooking Time:</h3>
  <p>{recipe.cookingTime}</p>
  <h3>Servings:</h3>
  <p>{recipe.servings}</p> */}
</div>
  );
}

export default RecipeDetail;
