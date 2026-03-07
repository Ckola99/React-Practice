import React from 'react'

const main = () => {
	const ingredients = ["Chicken", "Oregano", "Tomatoes"]

	const ingredientsListItems = ingredients.map(ingredient => (
		<li key={ingredient}>{ingredient}</li>
	))

	const handleSubmit = ( event ) => {
		event.preventDefault()
		
	}

	return (
		<main>
			<form onSubmit={handleSubmit} className='add-ingredient-form'>
				<input type="text"
					aria-label="Add ingredient"
					placeholder='e.g. oregano'
					name="ingredient"
				/>
				<button>Add ingredient</button>
			</form>
			<ul>
				{ingredientsListItems}
			</ul>
		</main>
	)
}

export default main
