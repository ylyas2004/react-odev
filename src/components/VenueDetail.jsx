import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Rating from "./Rating";
import FoodAndDrinkList from "./FoodAndDrinkList";
import Header from "./Header";
import HourList from "./HourList";
import CommentList from "./CommentList";
import server_url from '../services/config';

const VenueDetail = () => {
  const { id } = useParams();
  const reduxVenueData = useSelector((state) => state.venue_data);
  const [venue, setVenue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVenueData = async () => {
      try {
        // Check if venue exists in Redux first
        if (reduxVenueData && reduxVenueData.id === id) {
          setVenue(reduxVenueData);
          setIsLoading(false);
          return;
        }

        // Fetch from API if not in Redux
        const response = await fetch(`${server_url}/api/venues/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch venue details');
        }

        const fetchedVenue = await response.json();
        
        if (fetchedVenue && fetchedVenue.name) {
          setVenue(fetchedVenue);
        } else {
          throw new Error('Invalid venue data');
        }
      } catch (error) {
        console.error("Error fetching venue data:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVenueData();
  }, [id, reduxVenueData]);

  // Loading state
  if (isLoading) {
    return <div>Loading venue details...</div>;
  }

  // Error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // No venue found
  if (!venue) {
    return <div>No venue found</div>;
  }

  return (
    <div>
      <Header headerText={venue.name} />
      <div className="container1">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <p className="rating">
                  <Rating rating={venue.rating} />
                </p>
                <p>{venue.address}</p>
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h2 className="panel-title">Açılış Saatleri</h2>
                  </div>
                  <div className="panel-body">
                    <HourList hourList={venue.hours} />
                  </div>
                </div>
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h2 className="panel-title">Neler Var?</h2>
                  </div>
                  <div className="panel-body">
                    <FoodAndDrinkList foodAndDrinkList={venue.foodanddrink} />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="panel panel-primary">
                  <div className="panel-heading">
                    <h2 className="panel-title">Konum Bilgisi</h2>
                  </div>
                  <div className="panel-body">
                  <img
                      className="img img-responsive img-rounded"
                      alt="Konum Bilgisi"
                      src={`https://maps.googleapis.com/maps/api/staticmap?center=${
                        venue.coordinates
                      }&zoom=12&size=600x400&markers=${
                        venue.coordinates
                      }&key=AIzaSyCmmKygTpBzHGOZEciJpAdxC9v_tWHagnE`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <NavLink
                    className="btn btn-default pull-right"
                    to={`/venue/${id}/comment/new`}
                    state={{ name: venue.name }}
                  >
                    Yorum Ekle{" "}
                  </NavLink>
                  <h2 className="panel-title">Yorumlar</h2>
                </div>
                <div className="panel-body">
                  <CommentList commentList={venue.comments} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueDetail;