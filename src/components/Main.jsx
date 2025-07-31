import Form from "./Form";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe"
import { useState } from "react";
import {getRecipeFromMistral} from "../ai"
export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");

  

  

  async function generateRecipe() {
    
    const recipeGenerate = await getRecipeFromMistral(ingredients)
    console.log(recipeGenerate)
    setRecipe(recipeGenerate)
  }
  return (
    <main>
      
        <Form ingredients={ingredients} setIngredients={(e)=>setIngredients(e)}/>
        {ingredients.length > 0 && (
          <IngredientsList ingredients={ingredients} generateRecipe={generateRecipe}/>
        )}
        {recipe && (
          <ClaudeRecipe recipe={recipe}/>
        )}
      
    </main>
  );
}
