import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Add.css";

function Add() {
  const navigate = useNavigate();

  const [newRecipe, setNewRecipe] = useState({
    foodName: "",
    image: "",
    ingredients: "",
    method: "",
    PreparationTime: "",
    cookingTime: "",
    servings: "",
    category: "breakfast",
  });
  const [recipe, setRecipe] = useState([]);
  const [errors, setErrors] = useState({});

  const onAddRecipeChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!newRecipe.foodName) errors.foodName = "Food name is required.";
    if (!newRecipe.image) errors.image = "Image URL is required.";
    if (!newRecipe.ingredients) errors.ingredients = "Ingredients are required.";
    if (!newRecipe.method) errors.method = "Method is required.";
    if (!newRecipe.PreparationTime) errors.PreparationTime = "Preparation time is required.";
    if (!newRecipe.cookingTime) errors.cookingTime = "Cooking time is required.";
    if (!newRecipe.servings) errors.servings = "Number of servings is required.";
    return errors;
  };

  const onAddRecipe = async () => {
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:3000/recipes",
          newRecipe
        );


        

        setRecipe([...recipe, response.data]);
        window.alert("Submitted successfully!");
        navigate("/home");
      } catch (error) {
        window.alert("Submission failed. Please try again.");
      }
    } else {
      setErrors(errors);
    }
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
        {errors.foodName && <p className="error">{errors.foodName}</p>}
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={newRecipe.image}
          onChange={onAddRecipeChange}
        />
        {errors.image && <p className="error">{errors.image}</p>}
      </label>
      <label>
        Ingredients (comma-separated):
        <textarea
          name="ingredients"
          value={newRecipe.ingredients}
          onChange={onAddRecipeChange}
        />
        {errors.ingredients && <p className="error">{errors.ingredients}</p>}
      </label>
      <label>
        Method (period-separated):
        <textarea
          name="method"
          value={newRecipe.method}
          onChange={onAddRecipeChange}
        />
        {errors.method && <p className="error">{errors.method}</p>}
      </label>
      <label>
        Preparation Time:
        <input
          type="text"
          name="PreparationTime"
          value={newRecipe.PreparationTime}
          onChange={onAddRecipeChange}
        />
        {errors.PreparationTime && <p className="error">{errors.PreparationTime}</p>}
      </label>
      <label>
        Cooking Time:
        <input
          type="text"
          name="cookingTime"
          value={newRecipe.cookingTime}
          onChange={onAddRecipeChange}
        />
        {errors.cookingTime && <p className="error">{errors.cookingTime}</p>}
      </label>
      <label>
        Servings:
        <input
          type="text"
          name="servings"
          value={newRecipe.servings}
          onChange={onAddRecipeChange}
        />
        {errors.servings && <p className="error">{errors.servings}</p>}
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
