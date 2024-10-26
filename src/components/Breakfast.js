import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Breakfast.css';

function Breakfast() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/breakfast.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  const navigate = useNavigate();
  const handleCardClick = (recipe) => {
    navigate("/recipe", { state: { recipe } }); // Pass the recipe data to the new route
  }

  const handleEditClick = (recipe) => {
    navigate("/edit-recipe", { state: { recipe } }); // Navigate to the edit page with the recipe data
  }

  const handleDeleteClick = (recipe) => {
    setRecipes(recipes.filter(r => r.foodName !== recipe.foodName)); // Remove the recipe from the list
  }

  return (
    <div className="App">
      <h1>Our Recipes</h1>
      <input className='button1' type="button" onClick={() => navigate("/home")} value="Back to home" />
      <div className="recipeGrid">
        {recipes.map((recipe, index) => (
          <div className="recipeCard" key={index}>
            <h2>{recipe.foodName}</h2>
            <img src={recipe.image} alt={recipe.foodName}  onClick={() => handleCardClick(recipe)}/>
            <button  className='button2' onClick={() => handleEditClick(recipe)}>Edit</button>
            <button className='button2 red' onClick={() => handleDeleteClick(recipe)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Breakfast;

