import React, { useEffect, useState } from "react";
import InputWithLabel from "./InputWithLabel";
import VenueList from "./VenueList";
import Header from "./Header";
import server_url from '../services/config';

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [venues, setVenues] = useState([]);
  const [dynVenues, setDynVenues] = useState([]);

  // Fetch venues from the backend when the component mounts
  useEffect(() => {
    const fetchVenues = async () => {
      try {
        const response = await fetch(`${server_url}/api/venues`);
        const data = await response.json();
        setVenues(data);  // Set venues from the API
        setDynVenues(data);  // Initially, set dynVenues to all venues
        console.log(data);
      } catch (error) {
        console.error("Error fetching venues:", error);
      }
    };

    fetchVenues();
  }, []);

  // Handle search input and filter venues based on name
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchText(value);

    setDynVenues(
      venues.filter((venue) =>
        venue.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  // Reset dynVenues if search text is cleared
  useEffect(() => {
    if (searchText.length === 0) {
      setDynVenues(venues);
    }
  }, [searchText, venues]);

  return (
    <div>
      <Header
        headerText="Mekanbul"
        motto="Civarınızdaki Mekanlarınızı Keşfedin!"
      />
      <InputWithLabel
        id="arama"
        label="Mekan Ara:"
        typ="text"
        isFocused
        onInputChange={handleSearch}
        value={searchText}
      />
      <hr />
      <div className="row">
        <VenueList venues={dynVenues} />
      </div>
    </div>
  );
};

export default Home;
