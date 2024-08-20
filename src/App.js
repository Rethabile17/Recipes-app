
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from  "./components/home";
import Registration from "./components/Registration";
import Login from "./components/Login";
import About from "./components/About";
import Breakfast from "./components/Breakfast";
import Lunch from "./components/Lunch";
import Dinner from "./components/Dinner";

import './App.css';

function App() {
  return (

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/breakfast" element={<Breakfast />} />
        <Route path="/lunch" element={<Lunch />} />
        <Route path="/dinner" element={<Dinner />} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;
