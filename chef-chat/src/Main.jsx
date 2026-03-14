import { useState } from 'react'
import ChatRecipe from './components/ChatRecipe'
import IngredientsList from './components/IngredientsList'
import { getRecipeFromOpenAI } from './ai'
import { useRef } from 'react'
import { useEffect } from 'react'

const main = () => {
	const [ingredients, setIngredients] = useState([])
	const [recipe, setRecipe] = useState("")
	const recipeSection = useRef(null)
	const [loading, setLoading] = useState(false)

	const addIngredient = (formData) => {
		const newIngredient = formData.get("ingredient")
		setIngredients(prevIngredients => [...prevIngredients, newIngredient])
	}

	// this generates our recipe from open AI

	const generateRecipe = async () => {
		setLoading(true)
		const generatedRecipe = await getRecipeFromOpenAI(ingredients)
		setRecipe(generatedRecipe)
		setLoading(false)
	}

	useEffect(() => {
		if ( recipe !== "" && recipeSection.current !== null) {
			const yCoord =  recipeSection.current.getBoundingClientRect().top
			window.scroll({
				top: yCoord,
				behavior: "smooth"
			})
		}
	}, [recipe])

	return (
		<main>
			<form action={addIngredient} className='add-ingredient-form'>
				<p>WELCOME</p>
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
			<ChatRecipe recipe={recipe} loading = {loading} setLoading = {setLoading}/>
		</main>
	)
}

export default main
