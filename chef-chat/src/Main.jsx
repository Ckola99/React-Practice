import React from 'react'
import { useState } from 'react'
import ChatRecipe from './components/ChatRecipe'
import IngredientsList from './components/IngredientsList'
import { getRecipeFromOpenAI } from './ai'
import { useRef } from 'react'
import { useEffect } from 'react'

const main = () => {
	const [ingredients, setIngredients] = useState([])
	const [recipe, setRecipe] = useState(false)
	const recipeSection = useRef(null)


	const addIngredient = (formData) => {
		const newIngredient = formData.get("ingredient")
		setIngredients(prevIngredients => [...prevIngredients, newIngredient])
	}

	const generateRecipe = async () => {
		const generatedRecipe = await getRecipeFromOpenAI(ingredients)
		setRecipe(generatedRecipe)
	}

	useEffect(() => {
		if ( recipe !== "" && recipeSection.current !== null) {
			// recipeSection.current.scrollIntoView({ behavior: "smooth"})

			const yCoord =  recipeSection.current.getBoundingClientReact().top
			window.scroll({
				top: yCoord,
				behavior: "smooth"
			})
		}
	}, [recipe])

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
				<IngredientsList ingredients = {ingredients} generateRecipe={generateRecipe} ref={recipeSection}/>
				: null}
			{ recipe && <ChatRecipe recipe={recipe}/> }
		</main>
	)
}

export default main
