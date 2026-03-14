// this is the ingredients list comp

const IngredientsList = ({ ingredients, generateRecipe, ref }) => {

	const ingredientsListItems = ingredients.map(ingredient => (
		<li key={ingredient}>{ingredient}</li>
	))

	return (
		(<section>
			<h2>Ingredients on hand: </h2>
			<ul className='ingredients-list' aria-live='polite'>{ingredientsListItems}</ul>
			{ingredients.length > 3 ? (<div className="get-recipe-container">
				<div ref={ref}>
					<h3>Ready for recipe</h3>
					<p>Generate a recipe for your list of ingredients.</p>
				</div>
				<button onClick={generateRecipe}>Get a recipe</button>
			</div>) : null}
		</section>)
	)
}

export default IngredientsList
