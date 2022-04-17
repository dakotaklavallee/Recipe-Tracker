import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, deleteRecipe, editButtonHandler, editText }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  const recipeData = recipes.map(({name, cuisine, photo, ingredients, preparation}, index) => 
  <Recipe 
  name={name} 
  cuisine={cuisine} 
  photo={photo} 
  ingredients={ingredients} 
  preparation={preparation}
  deleteRecipe={() => deleteRecipe(index)}
  editButtonHandler={editButtonHandler}
  editText={editText}
  />);

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipeData}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
