import Form from "./Form";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe"
import { useState,useRef,useEffect } from "react";
import {getRecipeFromMistral} from "../ai"
export default function Main() {
  const [ingredients, setIngredients] = useState(["garlic","bread","spices","butter"]);
  const [recipe, setRecipe] = useState("");

  const recipeSection = useRef(null)
  useEffect(()=>{
    if(recipe!=="" && recipeSection!==null){
      recipeSection.current.scrollIntoView({behaviour:"smooth"})
    }
  },[recipe])
  

  async function generateRecipe() {
    
    const recipeGenerate = await getRecipeFromMistral(ingredients)
    console.log(recipeGenerate)
    setRecipe(recipeGenerate)
  }
  return (
    <main>
      
        <Form ingredients={ingredients} setIngredients={(e)=>setIngredients(e)}/>
        {ingredients.length > 0 && (
          <IngredientsList ingredients={ingredients} ref={recipeSection} generateRecipe={generateRecipe}/>
        )}
        {recipe && (
          <ClaudeRecipe recipe={recipe}/>
        )}
      
    </main>
  );
}
