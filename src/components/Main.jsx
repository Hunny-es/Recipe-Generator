import Form from "./Form";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe"
import { useState } from "react";
export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipeShown, setRecipeShown] = useState(false);

  

  

  function generateRecipe() {
    setRecipeShown(true);
  }
  return (
    <main>
      
        <Form ingredients={ingredients} setIngredients={(e)=>setIngredients(e)}/>
        {ingredients.length > 0 && (
          <IngredientsList ingredients={ingredients} generateRecipe={generateRecipe}/>
        )}
        {recipeShown && (
          <ClaudeRecipe/>
        )}
      
    </main>
  );
}
