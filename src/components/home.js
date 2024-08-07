import React, { useState, useEffect } from 'react';

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/recipes.json')
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div className="App">
      <h1>Our Recipes</h1>
      <button>Order here</button>
      <div>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <h2>{recipe.recipe['food-name']}</h2>
            <img src={recipe.recipe.image} alt={recipe.recipe['food-name']} />
            <h3>Ingredients:</h3>
            <ul>
              {recipe.recipe.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient.item}</li>
              ))}
            </ul>
            <h3>Method:</h3>
            <ol>
              {recipe.recipe.method.map((step, j) => (
                <li key={j}>{Object.values(step)}</li>
              ))}
            </ol>
            <h3>Serving Suggestions:</h3>
            <ul>
              {recipe.recipe.serve.map((serve, k) => (
                <li key={k}>{serve.serve}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
