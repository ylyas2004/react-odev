import { NavLink } from "react-router-dom";
import Rating from "./Rating";
import FoodAndDrinkList from "./FoodAndDrinkList";
import React from "react";
import { formatDistance } from "../services/Utils";
import { useSelector, useDispatch } from "react-redux";

const Venue = ({ venue}) => {
  const dispatch = useDispatch();
  // const data = useSelector( (state) => state.data);
  // const isLoading = useSelector( (state) => state.isLoading);
  // const isError = useSelector( (state) => state.isError);

  return (
    <div className="list-group">
      <div className="col-xs-12 col-sm-12">
        <div className="col-xs-12 list-group-item">
          <h4>
            <NavLink to={`/venue/${venue._id}`} onClick={() => dispatch({ type: "SET_VENUE", payload: venue })}>{venue.name} </NavLink>
            <Rating rating={venue.rating} />
          </h4>
          <span className="span badge pull-right badge-default">
            {formatDistance(venue.distance)}
          </span>
          <p className="address"> {venue.address}</p>
          <FoodAndDrinkList foodAndDrinkList={venue.foodanddrink} />
        </div>
      </div>
    </div>
  );
};
export default Venue;
