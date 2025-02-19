import React from "react";
import Pizza from "./Pizza";
import pizzaData from "../data";

function Menu() {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;

  return (
    <div className="menu">
      <h2>Our menu</h2>

      {numPizza > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p> We're still working on our menu. Please come back later.</p>
      )}
    </div>
  );
}

export default Menu;
