import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

const Home = () => {

  const APP_ID = "753cbc52";
  const APP_KEY = "42f7e4f615daf575d9dafee1622c8bfc";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(' ');
  const [query, setQuery] = useState('cherry')

  useEffect(() => {
    getRecipes();
  });

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch(' ');
  }

  let mealRecipes = recipes.map((recipe) => (<Recipe
      key={recipe.recipe.label}
      title={recipe.recipe.label}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}/>))

  return (
    <div className="Home">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit"> Search </button>
      </form>
    <div className ="recipes-container">
      <div className="inner-recipes-container">
        <div className="row">
            {mealRecipes}
      </div>
      <div class="footer">
        <p>Copyright &copy; myrecipes.com</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjSEo__EXpP_zd581Ds_X9HwwbXg_fRPIo6A&usqp=CAU" alt="logo" />     
      </div>
  </div>
  </div>
  </div>
  )};

export default Home;