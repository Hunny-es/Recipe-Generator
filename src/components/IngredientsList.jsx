export default function IngredientsList({ingredients,generateRecipe,ref}){
    const ingredientsList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return (
    
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
              {ingredientsList}
            </ul>
            {ingredients.length > 3 && (
              <div ref={ref} className="get-recipe-container">
                <div>
                  <h3>Ready for a recipe?</h3>
                  <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={generateRecipe}>Get a recipe</button>
              </div>
            )}
          </section>
    
  )
}
