import React from 'react';
import Ingredient from '../Ingredient/Ingredient';

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul>
      {stack.length === 0 ? (
        <li>No Ingredients</li>
      ) : (
        stack.map((ingredient, index) => (
          <Ingredient 
            key={index}
            ingredient={ingredient}
            onclick={() => removeFromBurger(index)}  
            actionType={'x'}
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
