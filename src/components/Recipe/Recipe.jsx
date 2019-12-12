import React from 'react';
import style from './Recipe.module.css';

const Recipe = (props) => {
    const showIngredients = props.ingredients.map(i => {
        return <li>{i.text}</li>
    });

    return (
        <div className={style.Item}>
            <h2>{props.title}</h2>
            <h3>Cal > {props.calories}</h3>
            <ol>
                {showIngredients}
            </ol>
            <img src={props.img} alt="recipeIMAGE"/>
        </div>
    );
};

export default Recipe;