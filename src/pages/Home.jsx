import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import { db } from "../firebase";

const Home = () => {
  const [listings, setListings] = useState(null);

  useEffect(() => {
    async function fetchListings() {
      const listingsRef = collection(db, "listings");
      const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5));
      const querySnap = await getDocs(q);
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setListings(listings);
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
