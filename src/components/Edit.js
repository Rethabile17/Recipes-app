import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './EditRecipe.css';

function EditRecipe() {
  const location = useLocation();
  const navigate = useNavigate();
  const { recipe } = location.state;

  const [foodName, setFoodName] = useState(recipe.foodName);
  const [image, setImage] = useState(recipe.image);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [method, setMethod] = useState(recipe.method);
  const [serve, setServe] = useState(recipe.serve);

  const handleSave = () => {
    const updatedRecipe = {
      ...recipe,
      foodName,
      image,
      ingredients,
      method,
      serve,
    };
    
    navigate("/lunch"); 
  }

  return (
    <div className="editRecipe">
      <h1>Edit Recipe</h1>
      <input type="text" value={foodName} onChange={(e) => setFoodName(e.target.value)} placeholder="Recipe Name" />
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
      <h3>Ingredients:</h3>
      <textarea value={ingredients.join(', ')} onChange={(e) => setIngredients(e.target.value.split(', '))} />
      <h3>Method:</h3>
      <textarea value={method.join(', ')} onChange={(e) => setMethod(e.target.value.split(', '))} />
      <h3>Serving Suggestions:</h3>
      <textarea value={serve} onChange={(e) => setServe(e.target.value)} />
      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
}

export default EditRecipe;
