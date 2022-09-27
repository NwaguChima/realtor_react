import {
  collection,
  getDoc,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase";

const Offers = () => {
  const [listings, setListings] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchListings() {
      try {
        const listingRef = collection(db, "listings");

        const q = query(
          listingRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(8)
        );

        const querySnap = await getDoc(q);
        const listings = [];

        querySnap.forEach((doc) => {
          return listings.push({ id: doc.id, data: doc.data() });
        });

        setListings(listings);
        setLoading(false);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch listings");
      }
    }

    fetchListings();
  }, []);

  return <div>Offers</div>;
};

export default Offers;
