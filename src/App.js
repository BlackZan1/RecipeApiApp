import React, { useEffect, useState } from 'react';
import Recipe from './components/Recipe/Recipe.jsx';
import Header from './components/Navbar/Navbar.jsx';
import style from './App.module.css';

const App = (props) => {
  const APP_ID = 'cf010f72', APP_KEY = 'c2691d0fdf556cf3a9282ac6fb6d1297';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('banana');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();

    console.log(data.hits);
    setRecipes(data.hits);
  };

  const updateSearch = (ev) => {
    setSearch(ev.target.value);
    console.log(search);
  };  

  const getSearch = (ev) => {
    ev.preventDefault();
    setQuery(search);
  };

  const showRecipes = recipes.map(rec => {
      return <Recipe img={rec.recipe.image} title={rec.recipe.label} calories={rec.recipe.calories} ingredients={rec.recipe.ingredients}/>
  });

  return (
    <div className={style.App}>
      <Header />

      <div className={style.AppForm}>
        <h3>What are recipes do you want to know ?</h3>
  
        <form onSubmit={getSearch}>
            <input type="text" className={style.AppInput} onChange={updateSearch} placeholder="Go to Search..."/>
            <button onClick={getRecipes} type="submit" className={style.AppBtn}>
                Search
            </button>
        </form>
      </div>

      <h1>Recipes:</h1>

      <div className={style.AppList}> 
        {showRecipes}
      </div>
    </div>
  );
}

export default App;
