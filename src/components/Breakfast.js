import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function Breakfast() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/breakfast.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  const navigate = useNavigate();


  const onButtonClick = () => {
    console.log ();
    navigate("/")

  }

  return (
    <div className="App">
      <h1>Our Recipes</h1>
      <input className='button1' type="button" onClick={ onButtonClick } value="Logout"/>
      <div className="mainApp">
        {recipes.map((recipe, index) => (
          <div key={index}>
            <h2>{recipe.foodName}</h2>
            <img src={recipe.image} alt={recipe.foodName} />
             <h3>Ingredients:</h3>
            <ul>
              {recipe.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient}</li>
              ))}
            </ul>
            <h3>Method:</h3>
            <ol>
              {recipe.method.map((step, j) => (
                <li key={j}>{step}</li>
              ))}
            </ol>
            <h3>Serving Suggestions:</h3>
            <p>{recipe.serve}</p> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Breakfast;