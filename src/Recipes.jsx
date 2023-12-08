import { Link } from "react-router-dom"
const Recipes = (props) => {
  return(
    <div>
      <h1>Recipes</h1>
      <ul>
        {
          props.recipes.map((recipe) => {
            return(
              <li key={recipe.name}>
                <Link to={`/recipes/${recipe.id}`}>
                    {recipe.name}
                </Link>
                
            </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Recipes