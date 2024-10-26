
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from  "./components/home";
import Registration from "./components/Registration";
import Login from "./components/Login";
import About from "./components/About";
import Breakfast from "./components/Breakfast";
import Lunch from "./components/Lunch";
import Dinner from "./components/Dinner";
import './App.css';
import RecipeDetail from "./components/Recipe";
import EditRecipe from "./components/Edit";

function App() {
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
        <Route path="/edit-recipe" element={<EditRecipe />} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;
