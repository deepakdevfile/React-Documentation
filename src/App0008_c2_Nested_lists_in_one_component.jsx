import { recipes } from './App0008_c2_data';

function RecipeList() {
    const recipeList = recipes.map(dish => 
        <div key={dish.id}>
            <h2>{dish.name}</h2>
            <ul>{dish.ingredients.map(ingredient => <li>{ingredient}</li>)}</ul>
        </div>
    )
    
    return (
        <div>
            <h1>Recipes</h1>
            {recipeList}
        </div>
    );
}

export default function App(){
    return(
        <RecipeList />
    );
}