import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useLocation, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import Artists from './Artists'
import Recipes from './Recipes'
import SingleArtist from './SingleArtist'
import SingleRecipe from './SingleRecipe'

function App() {
  const [artists, setArtists] = useState([])
  const [recipes, setRecipes] = useState([])

  const location = useLocation()
  const {pathname} = location
  //const pathname = location.pathname


  useEffect(() => {
    const fetchArtists = async () => {
      const {data} = await axios.get('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310/artists')
      setArtists(data.data)
    }
    fetchArtists()
  },[])

  useEffect(() => {
    const fetchRecipes = async () => {
      const {data} = await axios.get('https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310/recipes')
      setRecipes(data.data)
    }
    fetchRecipes()
  },[])

  return (
   <div>
    <nav>
      <Link to='/' className={pathname === "/" ? "selected" : ""}>Home</Link>
      <Link to='/artists' className={pathname === "/artists" ? "selected" : ""}>Artists - {artists.length}</Link>
      <Link to='/recipes' className={pathname === "/recipes" ? "selected" : ""}>Recipes - {recipes.length}</Link>
    </nav>

    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/artists' element={<Artists artists={artists}/>}/>
      <Route path='/artists/:id' element={<SingleArtist artists={artists}/>}/>
      <Route path='/recipes' element={<Recipes recipes={recipes}/>}/>
      <Route path='/recipes/:id' element={<SingleRecipe recipes={recipes}/>}/>
    </Routes>

   </div>
  )
}

export default App
