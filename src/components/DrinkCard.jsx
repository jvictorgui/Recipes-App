import React, { useContext } from 'react';
import myContext from '../context/myContext';

function DrinkCard() {
  const {
    drink12Recipes,
  } = useContext(myContext);

  return (
    <div>
      <section>
        {drink12Recipes.map(({ strDrink, strDrinkThumb }, index) => (
          <div
            key={ index }
            data-testid={ `${index}-recipe-card` }
          >
            <h3
              data-testid={ `${index}-card-name` }
            >
              { strDrink }
            </h3>
            <img
              src={ strDrinkThumb }
              alt={ strDrink }
              data-testid={ `${index}-card-img` }
            />
          </div>
        ))}
      </section>
    </div>
  );
}

export default DrinkCard;