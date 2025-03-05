import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Breakfast.css';

function Lunch() {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/db.json')
      .then(response => response.json())
      .then(data => setRecipes(data.lunch)) 
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  const handleCardClick = (recipe) => {
    navigate("/recipe", { state: { recipe } }); 
  };

  const handleEditClick = (recipe) => {
    navigate("/edit-recipe", { state: { recipe } }); 
  };

  const handleDeleteClick = (recipe) => {
    setRecipes(recipes.filter(r => r.foodName !== recipe.foodName)); 
  };

  return (
    <div className="App">
      <h1>Our Lunch Recipes</h1>
      <input className='button1' type="button" onClick={() => navigate("/home")} value="Back to home" />
      <div className="recipeGrid">
        {recipes.map((recipe, index) => (
          <div className="recipeCard" key={index}>
            <h2>{recipe.foodName}</h2>
            <img src={recipe.image} alt={recipe.foodName} onClick={() => handleCardClick(recipe)} />
            <button className='button2' onClick={() => handleEditClick(recipe)}>Edit</button>
            <button className='button2 red' onClick={() => handleDeleteClick(recipe)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lunch;
