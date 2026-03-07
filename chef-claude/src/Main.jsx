import React from 'react'
import { useState } from 'react'
import ClaudeRecipe from './components/ClaudeRecipe'
import IngredientsList from './components/IngredientsList'

const main = () => {
	const [ingredients, setIngredients] = useState([])
	const [recipeShown, setRecipeShown] = useState(false)


	const addIngredient = (formData) => {
		const newIngredient = formData.get("ingredient")
		setIngredients(prevIngredients => [...prevIngredients, newIngredient])
	}

	const toggleRecipeShown = () => {
		setRecipeShown(prevShown => !prevShown)
	}

	return (
		<main>
			<form action={addIngredient} className='add-ingredient-form'>
				<input type="text"
					aria-label="Add ingredient"
					placeholder='e.g. oregano'
					name="ingredient"
				/>
				<button>Add ingredient</button>
			</form>
			{ingredients.length > 0 ?
				<IngredientsList ingredients = {ingredients} toggleRecipeShown={toggleRecipeShown}/>
				: null}
			{ recipeShown && <ClaudeRecipe /> }
		</main>
	)
}

export default main
