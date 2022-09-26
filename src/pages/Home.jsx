import React, { useEffect } from "react";
import Slider from "../components/Slider";

const Home = () => {
  useEffect(() => {
    async function fetchListings() {
      const listings = await fetch(
        "https://us-central1-rental-clone-1a6f7.cloudfunctions.net/api/listings"
      );
      const listingsJson = await listings.json();
      console.log(listingsJson);
    }

    fetchListings();
  }, []);

  return (
    <div>
      <Slider />
    </div>
  );
};

export default Home;
