import {useState} from "react"
export default function Form(){
    const [ingredients,setIngredients]=useState([])
    const ingredientsList=ingredients.map(ingredient=>
    <li key={ingredient}>{ingredient}</li>
    )
    function formSubmit(formData){
        const newIngredient=formData.get("ingredient");
        setIngredients(prev=>[...prev,newIngredient])
    }
    return(
        <div>
        <form action={formSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsList}
            </ul>
        </div>
    )
}