import React from 'react';
import recipes from '../recipes';

function Menu() {
  return (
    <div className='menu-container'>
      <div className='menu-header'>
        <h2>This weeks specials!</h2>
        <button>Order Menu</button>
      </div>
      {/* menu cards */}
      <div className='cards'>
        {recipes.map((recipe) => (
          <div className='menu-items' key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} />
            <div className='menu-content'>
              <div className='heading'>
              <h5>{recipe.title}</h5>
              <p>{recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button className='orderbtn'>Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu