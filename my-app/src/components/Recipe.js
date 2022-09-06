import React from 'react';

const Recipe = ({title,calories,image,ingredients}) => {
  return (
      <div className="recipe">
          <h1>{title}</h1>
          <img className="image" src={image} alt=""/>
          <p>Calories : {calories}</p>
          <ul className="ingredient">
              {ingredients.map(ingredient => (
                  <li className="ingredient-container">{ingredient.text}</li>
              ))}
          </ul>
      </div>
  );
}

export default Recipe;