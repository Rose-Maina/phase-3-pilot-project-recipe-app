import React, { useEffect, useState } from 'react';

function Home() {
    const [recipe, setRecipe] = useState(null);
  
    useEffect(() => {
      fetch("www.themealdb.com/api/json/v1/1/random.php")
        .then((response) => response.json())
        .then((data) => {
          setRecipe(data.meals);
        });
    }, []);
    // use an empty dependencies array, so we only run the fetch request ONCE

    return 
 }
 export default Home;