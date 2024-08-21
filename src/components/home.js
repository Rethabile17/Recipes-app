import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  // Function to fetch recipes from multiple files
  const fetchRecipes = async () => {
    try {
      const breakfastResponse = await fetch("/breakfast.json");
      const lunchResponse = await fetch("/lunch.json");
      const dinnerResponse = await fetch("/dinner.json");

      const breakfastData = await breakfastResponse.json();
      const lunchData = await lunchResponse.json();
      const dinnerData = await dinnerResponse.json();

      setRecipes([...breakfastData, ...lunchData, ...dinnerData]);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      fetchRecipes();
    }
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery) {
      setFilteredRecipes(
        recipes.filter((recipe) =>
          recipe.foodName.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredRecipes([]);
    }
  }, [searchQuery, recipes]);

  const onSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const onSearchClick = () => {
    console.log("Search clicked");
  };

  const onButtonClick = () => {
    navigate("/Registration");
  };

  return (
    <div className="mainContainer">
      <div>
        <div className={"titleContainer"}>Welcome!</div>
        <div className="site">
          <div>Delicious food site</div>
          <h1>Categories of Meat</h1>
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
          <div className="item">
            <img
              src={
                "https://tse1.mm.bing.net/th?id=OIP.MqnnmaRAaaY8jcQJZAVs1AHaE8&pid=Api&P=0&h=220"
              }
              alt=""
            />
            <input
              className="inputButton"
              type="button"
              onClick={() => navigate("/Breakfast")}
              value="Breakfast"
            />
          </div>
          <div className="item2">
            <img
              src={
                "https://tse4.mm.bing.net/th?id=OIP.tUQYQcOOKUiJmMyYYEfC7wAAAA&pid=Api&P=0&h=220"
              }
              alt=""
            />
            <input
              className="inputButton"
              type="button"
              onClick={() => navigate("/Lunch")}
              value="Lunch"
            />
          </div>
          <div className="item3">
            <img
              src={
                "https://tse2.mm.bing.net/th?id=OIP.BBBFktSIlFxr2ftuvB33rgHaE8&pid=Api&P=0&h=220"
              }
              alt=""
            />
            <input
              className="inputButton"
              type="button"
              onClick={() => navigate("/Dinner")}
              value="Dinner"
            />
          </div>
          <div className="item4">
            <img
              src={
                "https://tse4.mm.bing.net/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&pid=Api&P=0&h=220"
              }
              alt=""
            />
            <input
              className="inputButton"
              type="button"
              onClick={() => navigate("/About")}
              value="Meals"
            />
          </div>
        </div>

        {filteredRecipes.length > 0 && (
          <div className="recipesContainer">
            {filteredRecipes.map((recipe) => (
              <div key={recipe.foodName} className="recipeItem">
                <h2>{recipe.foodName}</h2>
                <img src={recipe.image} alt={recipe.foodName} />
                <p>Ingredients: {recipe.ingredients.join(", ")}</p>
                <p>Method: {recipe.method.join(" ")}</p>
              </div>
            ))}
          </div>
        )}

        <div>
          <input
            className="inputButton2"
            type="button"
            onClick={onButtonClick}
            value="Logout"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
