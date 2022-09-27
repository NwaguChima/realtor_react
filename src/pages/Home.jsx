import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import { db } from "../firebase";

const Home = () => {
  // Offers
  const [offerListings, setOfferListings] = useState(null);

  useEffect(() => {
    async function fetchListings() {
      try {
        // get referecne
        const listingsRef = collection(db, "listings");
        // create query
        const q = query(
          listingsRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(4)
        );

        // execute the query
        const querySnap = await getDocs(q);
        const listings = [];

        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setOfferListings(listings);
      } catch (error) {
        console.log(error);
      }
    }

    fetchListings();
  });

  return (
    <div>
      <Slider />
    </div>
  );
};

export default Home;
