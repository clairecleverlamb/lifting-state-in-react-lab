import React from 'react';
import Ingredient from '../Ingredient/Ingredient';

const IngredientList = ({ ingredients, addToBurger }) => {
    return (
        <ul>
            {ingredients.map((ingredient, index) => {
                return (
                    <Ingredient 
                        key={index}
                        ingredient={ingredient}
                        onclick={addToBurger}
                        actionType={'+'}
                    />
                );
            })}
        </ul>
    );
};

export default IngredientList;
