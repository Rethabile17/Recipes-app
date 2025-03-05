import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("breakfast");
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [editedRecipe, setEditedRecipe] = useState({
    foodName: "",
    image: "",
    ingredients: [],
    method: [],
  });

  const fetchRecipes = (category) => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || {
      breakfast: [],
      lunch: [],
      dinner: [],
    };
    setRecipes(storedRecipes[category]);
  };

  useEffect(() => {
    fetchRecipes(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    const filtered = recipes.filter((recipe) =>
      recipe.foodName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRecipes(filtered);
  }, [searchQuery, recipes]);

  const onSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const onSearchClick = () => {
    console.log("Search clicked")
  }

  const onDeleteClick = (foodName) => {
    const updatedRecipes = recipes.filter((recipe) => recipe.foodName !== foodName);
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify({
      ...JSON.parse(localStorage.getItem("recipes")),
      [selectedCategory]: updatedRecipes
    }));
  };

  const onEditClick = (recipe) => {
    setEditingRecipe(recipe.foodName);
    setEditedRecipe(recipe);
  };

  const onEditChange = (e) => {
    const { name, value } = e.target;
    setEditedRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const onSaveClick = () => {
    const updatedRecipes = recipes.map((recipe) =>
      recipe.foodName === editingRecipe ? editedRecipe : recipe
    );
    setRecipes(updatedRecipes);
    localStorage.setItem("recipes", JSON.stringify({
      ...JSON.parse(localStorage.getItem("recipes")),
      [selectedCategory]: updatedRecipes
    }));
    setEditingRecipe(null);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchQuery(""); 
  };

  console.log(recipes)


  const viewRecipe =  ((recipe)=>{
    console.log(recipe)
   navigate("/recipe" , {state:recipe})
  })

  return (
    <div className="homeContainer">
      <div className="site">
        <h1>Delicious food site</h1>
      </div>

      <div className="Searchbar">
        <input
          className="inputSearch"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={onSearchChange}
        />
         <input
            className="inputButton3"
            type="button"
            value="Search"
            onClick={onSearchClick}
          />
      </div>

      <div className="categories">
        <input className="inputButton" type="button" onClick={() => handleCategoryChange("breakfast")} value="Breakfast" />
        <input className="inputButton" type="button" onClick={() => handleCategoryChange("lunch")} value="Lunch" />
        <input className="inputButton" type="button" onClick={() => handleCategoryChange("dinner")} value="Dinner" />
      </div>
         
{filteredRecipes.length > 0 && (
  <div className="recipesContainer"   >
    {filteredRecipes.map((recipe) => (
      <div key={recipe.foodName} className="recipeItem">
        {editingRecipe === recipe.foodName ? (
          <div>
            <h2>
              <input
                type="text"
                name="foodName"
                value={editedRecipe.foodName}
                onChange={onEditChange}
              />
            </h2>
            <img src={editedRecipe.image} alt={recipe.foodName} />
            <p>
              Ingredients:{" "}
              <textarea
                name="ingredients"
                value={editedRecipe.ingredients.join(", ")}
                onChange={onEditChange}
              />
            </p>
            <p>
              Method:{" "}
              <textarea
                name="method"
                value={editedRecipe.method.join(". ")}
                onChange={onEditChange}
              />
            </p>
            <p>
              Preparation Time:{" "}
              <input
                type="text"
                name="PreparationTime"
                value={editedRecipe.PreparationTime}
                onChange={onEditChange}
              />
            </p>
            <p>
              Cooking Time:{" "}
              <input
                type="text"
                name="cookingTime"
                value={editedRecipe.cookingTime}
                onChange={onEditChange}
              />
            </p>
            <p>
              Servings:{" "}
              <input
                type="text"
                name="servings"
                value={editedRecipe.servings}
                onChange={onEditChange}
              />
            </p>
            <button onClick={onSaveClick}>Save</button>
          </div>
        ) : (
          <div>
            <h2>{recipe.foodName}</h2>
            <img src={recipe.image} alt={recipe.foodName}  onClick={()=>viewRecipe(recipe)}/>
            <p>Preparation Time: {recipe.preparationTime}</p>
            <p>Cooking Time: {recipe.cookingTime}</p>
            <p>Servings: {recipe.servings}</p>
            <button className="button2" onClick={() => onEditClick(recipe)}>Edit</button>
            <button className="button2 red" onClick={() => onDeleteClick(recipe.foodName)}>Delete</button>
          </div>
        )}
      </div>
    ))}
  </div>
)}

      <div className="add-button">
        <input className="inputButton5" type="button" onClick={() => navigate("/Add")} value="Add Recipes" />
      </div>
    </div>
  );
}

export default Home;
