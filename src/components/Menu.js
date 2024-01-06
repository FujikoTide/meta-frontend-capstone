import React from "react";
import recipes from "../recipes";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2 className="display-subtitle">This weeks specials!</h2>
        <button className="specials">Online Menu</button>
      </div>

      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt={recipe.title} />
            <div className="menu-content">
              <div className="heading">
                <p className="card-title">{recipe.title}</p>
                <p className="card-title">${recipe.price}</p>
              </div>
              <p className="paragraph-text">{recipe.description}</p>
              <button className="orderBtn specials">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
