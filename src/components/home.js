import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [editingRecipe, setEditingRecipe] = useState(null);
  const [editedRecipe, setEditedRecipe] = useState({
    foodName: "",
    image: "",
    ingredients: [],
    method: [],
  });
  const [profileEditing, setProfileEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    username: "Guest",
    email: "",
  });

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

  const onDeleteClick = (foodName) => {
    setRecipes((prevRecipes) =>
      prevRecipes.filter((recipe) => recipe.foodName !== foodName)
    );
    setFilteredRecipes((prevFiltered) =>
      prevFiltered.filter((recipe) => recipe.foodName !== foodName)
    );
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
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.foodName === editingRecipe ? editedRecipe : recipe
      )
    );
    setFilteredRecipes((prevFiltered) =>
      prevFiltered.map((recipe) =>
        recipe.foodName === editingRecipe ? editedRecipe : recipe
      )
    );
    setEditingRecipe(null);
  };

  const onProfileChange = (e) => {
    const { name, value } = e.target;
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const onSaveProfile = () => {
    console.log("Profile saved:", userProfile);
    setProfileEditing(false);
  };

  const goToCategories = (category) => {
    navigate(`/${category}`);
  };

  return (
    <div className="mainContainer">
      <div>
        <div className={"titleContainer"}>Welcome, {userProfile.username}!</div>

        <div className="profileSection">
          {profileEditing ? (
            <div>
              <h2>Edit Profile</h2>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={userProfile.username}
                  onChange={onProfileChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={userProfile.email}
                  onChange={onProfileChange}
                />
              </label>
              <button onClick={onSaveProfile}>Save Profile</button>
              <button onClick={() => setProfileEditing(false)}>Cancel</button>
            </div>
          ) : (
            <div>
              <h2>Profile</h2>
              <p>Username: {userProfile.username}</p>
              <p>Email: {userProfile.email}</p>
              <button onClick={() => setProfileEditing(true)}>Edit Profile</button>
            </div>
          )}
        </div>

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
              onClick={() => goToCategories("Breakfast")}
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
              onClick={() => goToCategories("Lunch")}
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
              onClick={() => goToCategories("Dinner")}
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
              onClick={() => goToCategories("About")}
              value="Meals"
            />
          </div>
        </div>

        {filteredRecipes.length > 0 && (
          <div className="recipesContainer">
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
                        value={editedRecipe.method.join(" ")}
                        onChange={onEditChange}
                      />
                    </p>
                    <button onClick={onSaveClick}>Save</button>
                  </div>
                ) : (
                  <div>
                    <h2>{recipe.foodName}</h2>
                    <img src={recipe.image} alt={recipe.foodName} />
                    <p>Ingredients: {recipe.ingredients.join(", ")}</p>
                    <p>Method: {recipe.method.join(" ")}</p>
                    <button onClick={() => onEditClick(recipe)}>Edit</button>
                    <button onClick={() => onDeleteClick(recipe.foodName)}>
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div>
          <input
            className="inputButton2"
            type="button"
            onClick={() => navigate("/Registration")}
            value="Logout"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
