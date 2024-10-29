import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Add.css"; // Your CSS file for styling

function Add({ recipes, setRecipes }) {
  const navigate = useNavigate();

  const [newRecipe, setNewRecipe] = useState({
    foodName: "",
    image: "",
    ingredients: "",
    method: "",
    category: "dinner", // Default category
  });

  const onAddRecipeChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const onAddRecipe = () => {
    const recipeToAdd = {
      ...newRecipe,
      ingredients: newRecipe.ingredients.split(",").map((ingredient) => ingredient.trim()), // Trim whitespace
      method: newRecipe.method.split(".").map((step) => step.trim()),
    };

    // Update the recipes state and local storage
    setRecipes((prevRecipes) => {
      const updatedRecipes = {
        ...prevRecipes,
        [newRecipe.category]: [...prevRecipes[newRecipe.category], recipeToAdd],
      };
      localStorage.setItem("recipes", JSON.stringify(updatedRecipes)); // Update localStorage
      return updatedRecipes;
    });

    // Navigate back to home
    navigate("/home");
  };

  return (
    <div className="addRecipeContainer">
      <h2>Add New Recipe</h2>
      <label>
        Food Name:
        <input
          type="text"
          name="foodName"
          value={newRecipe.foodName}
          onChange={onAddRecipeChange}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={newRecipe.image}
          onChange={onAddRecipeChange}
        />
      </label>
      <label>
        Ingredients (comma-separated):
        <textarea
          name="ingredients"
          value={newRecipe.ingredients}
          onChange={onAddRecipeChange}
        />
      </label>
      <label>
        Method (period-separated):
        <textarea
          name="method"
          value={newRecipe.method}
          onChange={onAddRecipeChange}
        />
      </label>
      <label>
        Category:
        <select name="category" value={newRecipe.category} onChange={onAddRecipeChange}>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="recipes">Recipes</option>
        </select>
      </label>
      <button onClick={onAddRecipe}>Add Recipe</button>
      <button onClick={() => navigate("/home")}>Cancel</button>
    </div>
  );
}

export default Add;
