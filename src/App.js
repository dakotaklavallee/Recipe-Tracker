import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData); // ([])
  const [editText, setEditText] = useState("Edit");
  const createRecipe = (newRecipe) => setRecipes((currentRecipes) => [...currentRecipes, newRecipe,]);
  const deleteRecipe = (indexToDelete) => setRecipes((currentRecipes) => currentRecipes.filter((recip, index) => index !== indexToDelete ));
  const editButtonHandler = (event) => {
    console.log(event);
    if (editText === "Submit"){
      setEditText("Edit")
    }else{
      setEditText("Submit")
    };
    
  }

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} editButtonHandler={editButtonHandler} editText={editText} />
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;
