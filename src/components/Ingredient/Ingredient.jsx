import React, { act } from "react";

const Ingredient = ({ ingredient, onclick, actionType }) => {
    return (
        <li
            style={{
                backgroundColor: ingredient.color,
                padding: '10px',
                margin: '5px',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            {ingredient.name}
            {actionType === '+' ? (
                <button onClick={() => onclick(ingredient)}
                style={{
                    backgroundColor: 'green',
                    color: 'white',
                    cursor:'pointer'
                }}
                >+</button>
            ) : actionType === 'x' ? (
                <button onClick={() => onclick(ingredient)}
                style={{
                    backgroundColor: 'red',
                    color: 'white',
                    cursor:'pointer'
                }}
                >x</button>
            ) : null
        }
        </li>
    );
};

export default Ingredient;