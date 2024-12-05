import InputWithLabel from "./InputWithLabel";
import VenueList from "./VenueList";
import Header from "./Header";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [searchText, setSearchText] = useState("");

  function handleSearch(event) {
    const value = event.target.value;
    
    setSearchText(value);

    setDynVenues(
      venues.filter((venue) =>
        venue.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }

  //Şimdilik veri statik. Backend bitince Rest API'den gelecek.
  const venues = [
    // {
    //   _id: 1,
    //   name: "Bilgisayar Mühendisliği",
    //   rating: 5,
    //   distance: 1,
    //   address: "SDÜ",
    //   foodanddrink: ["Web", "Yazılım", "ASY"],
    // },
    {
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
    // {
    //   _id: 2,
    //   name: "Cam Kafe",
    //   rating: 1,
    //   distance: 11,
    //   address: "SDÜ",
    //   foodanddrink: ["Doner", "Tost", "Pizza"],
    // },
    {
      _id: 2,
      name: "Cam Kafe",
      rating: 3,
      distance: 10,
      address: "SDÜ",
      foodanddrink: ["Pizza", "Burger", "Toast"],
      hours:[{days:"Pazartesi-Cuma",open:"11:30",close:"12:00"}],
      coordinates:[37.829545, 30.524648],
      comments:[{rating:3,author:"Ylyas",text:"Not bad"}]
    }
  ];
  const [dynVenues, setDynVenues] = useState(venues);

  useEffect(() =>
  {
    if (searchText.length == 0){
      setDynVenues(venues);
    }
  }, [searchText])
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
