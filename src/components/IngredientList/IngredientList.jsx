const IngredientList = ({ingredients, addToBurger}) => {
    return (
        <ul>
            {ingredients.map((ingredient, index) => (
                <li key={index} style={{ backgroundColor: ingredient.color, padding: "10px", margin: "5px" }}>
                    {ingredient.name}
                    <button onClick={() => addToBurger(ingredient)}
                            style={{ backgroundColor: "green", color: "white", padding: "5px", border: "none", cursor: "pointer" }}>
                                +</button>
                </li>
            ))}
        </ul>
    );
  };
  
  export default IngredientList;
  