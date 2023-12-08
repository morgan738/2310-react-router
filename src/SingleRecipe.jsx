import { useParams, Link } from "react-router-dom"

const SingleRecipe = ({recipes}) => {
    console.log(recipes)
    const params = useParams()
    console.log(params)
    const id = params.id*1

    const recipe = recipes.find((recipe) => {
        //credit Kala
        return recipe.id === id
    })
    console.log(recipe)

    if(!recipe){
        return null
    }

    return(
        <div>
            <h1>{recipe.name}</h1>
            <Link to='/recipes'>
                Back to all Recipes
            </Link>
        </div>
    )

}

export default SingleRecipe