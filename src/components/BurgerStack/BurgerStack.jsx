import IngredientList from "../IngredientList/IngredientList";

const BurgerStack = ({stack, removeFromBurger}) => {
    return (
        <ul>
            {stack.map((ingredient, index) => (
                <li key={index} style={{ backgroundColor: ingredient.color, padding: "10px", margin: "5px" }}>
                    {ingredient.name}
                    <button onClick={() => removeFromBurger(index)}
                            style={{ backgroundColor: "red", color: "white", padding: "5px", border: "none", cursor: "pointer" }}>
                                x</button>
                </li>
            ))}
        </ul>
    );
  };
  
  export default BurgerStack;
  