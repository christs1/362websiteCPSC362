import React from 'react';
import Banner from '../Components/Banner/Banner';
import all_knives from '../Components/Assets/all_knifes';
import Knife from '../Components/Knife/Knife';
import './CSS/Shop.css';

export const Shop = () => {
  // Select 3 random knives
  const randomKnives = all_knives.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <div>
      <Banner />
      <div className="todays-selection">
        <h2>Today's Selection:</h2>
        <div className="knives">
          {randomKnives.map((knife, index) => (
            <Knife
              key={index}
              id={knife.id}
              name={knife.name}
              image={knife.image}
              knife_price={knife.knife_price}
              className={index === 1 ? 'center-knife' : 'side-knife'}
            />
          ))}
        </div>
      </div>
      <div className="actions">
        <a href="/signup" className="btn">Sign Up Now</a>
        <a href="/sell" className="btn">Sell</a>
      </div>
    </div>
  );
};

export default Shop;
