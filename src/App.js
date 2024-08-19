
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from  "./components/home";
import Registration from "./components/Registration";
import Login from "./components/Login";
import About from "./components/About";


function App() {
  return (

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </BrowserRouter>

  );
}

export default App;
