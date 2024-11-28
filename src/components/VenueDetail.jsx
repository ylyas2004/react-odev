import { NavLink } from "react-router-dom";
import Rating from "./Rating";
import FoodAndDrinkList from "./FoodAndDrinkList";
import Header from "./Header";
import HourList from "./HourList";
import CommentList from "./CommentList";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const VenueDetail = () => {
  const { id } = useParams();
  //Şimdilik veri statik. Backend bitince Rest API'den gelecek.
  const venue1 = {
    data: {
      _id: 1,
      name: "Bilgisayar Mühendisliği",
      rating: 5,
      distance: 1,
      address: "SDÜ",
      foodanddrink: ["Web", "Yazılım", "ASY"],
      hours:[{days:"Pazartesi-Cuma",open:"9:30",close:"17:00"}],
      coordinates:[37.82983938808944, 30.52514779841139],
      comments:[{rating:5,author:"Sinan",text:"Süper bir yer"}]
    },
  };

  const venueData = useSelector((state) => state.venue_data); // Fetching data from Redux
  const [venue, setVenue] = useState(venue1.data);

  useEffect(() => {
    if (venueData) {
      setVenue(venueData);
    }
    console.log("Current Venue Data:", venueData);
  }, []);

  return (
    <div>
      <Header headerText={venue.name} />
      <div className="container1">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="row">
              <div className="col-xs-12 col-sm-6 ">
                <p className="rating">
                  <Rating rating={venue.rating} />
                </p>
                <p>{venue.address}</p>
                <div className="panel panel-primary">
                  <div className="panel-heading ">
                    <h2 className="panel-title ">Açılış Saatleri</h2>
                  </div>
                  <div className="panel-body ">
                    <HourList hourList={venue.hours} />
                  </div>
                </div>
                <div className="panel panel-primary">
                  <div className="panel-heading ">
                    <h2 className="panel-title ">Neler Var?</h2>
                  </div>
                  <div className="panel-body ">
                    <FoodAndDrinkList foodAndDrinkList={venue.foodanddrink} />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="panel panel-primary">
                  <div className="panel-heading ">
                    <h2 className="panel-title ">Konum Bilgisi</h2>
                  </div>
                  <div className="panel-body ">
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
            <div className="col-xs-12 ">
              <div className="panel panel-primary">
                <div className="panel-heading ">
                  <NavLink
                    className="btn btn-default pull-right"
                    to={`/venue/${id}/comment/new`}state={{ name: venue.name }}
                  >
                    Yorum Ekle{" "}
                  </NavLink>
                  <h2 className="panel-title ">Yorumlar</h2>
                </div>
                <div className="panel-body ">
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
