import React from 'react';
import restaurantPropType from '../propTypes/restaurant';
import Rating from './rating';
import TenBisIcon from './tenBisIcon';
import CuisineConverter from './cuisineConverter';

const Restaurant = ({ restaurant }) => (
  <div
    className="restaurant-item"
    // onClick={onClick}
  >
    <div className="restaurant-cuisine">
      <div className="cuisine-icon">
        <CuisineConverter cuisine={restaurant.cuisine}/>
      </div>
    </div>
    <div className="restaurant-info">
      <div className="restaurant-name">
        {restaurant.name}
        <TenBisIcon isTenBis={restaurant.is_10_bis}/>
      </div>
      <div className="restaurant-rating">
        <Rating rating={restaurant.rating} maxRating={3}/>
      </div>
      {restaurant.max_deliver_in_min !== null &&
      <div className="restaurant-deliver-time">
        {`Deliver in: ${restaurant.max_deliver_in_min}`}
      </div>
      }
    </div>
  </div>
);

Restaurant.propTypes = {
  // onClick: PropTypes.func,
  restaurant: restaurantPropType,
};

export default Restaurant;
