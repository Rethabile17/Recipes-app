import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Registration from "./components/Registration";
import Login from "./components/Login";
import About from "./components/About";
import Breakfast from "./components/Breakfast";
import Lunch from "./components/Lunch";
import Dinner from "./components/Dinner";
import './App.css';
import RecipeDetail from "./components/Recipe";
import EditRecipe from "./components/Edit";
import Add from "./components/Add";
import { useState, useEffect } from "react";

function App() {
  const [recipes, setRecipes] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
    recipes: [],
  });

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes"));
    if (savedRecipes) {
      setRecipes(savedRecipes);
    } else {
      const fetchData = async () => {
        try {
          const breakfastResponse = await fetch("/breakfast.json");
          const lunchResponse = await fetch("/lunch.json");
          const dinnerResponse = await fetch("/dinner.json");
          const recipesResponse = await fetch("/recipes.json");

          const breakfastData = await breakfastResponse.json();
          const lunchData = await lunchResponse.json();
          const dinnerData = await dinnerResponse.json();
          const recipesData = await recipesResponse.json();

          setRecipes({
            breakfast: breakfastData,
            lunch: lunchData,
            dinner: dinnerData,
            recipes: recipesData,
          });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner />} />
        <Route path="/recipe" element={<RecipeDetail />} />
        <Route path="/edit" element={<EditRecipe />} />
        <Route path="/add" element={<Add recipes={recipes} setRecipes={setRecipes} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
