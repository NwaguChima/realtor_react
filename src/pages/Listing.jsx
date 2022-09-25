import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { db } from "../firebase";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "Swiper/css/bundle";

const Listing = () => {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const { listingId } = useParams();
  SwiperCore.use(Autoplay, Navigation, Pagination);

  useEffect(() => {
    async function fetchListing() {
      const docRef = doc(db, "listings", listingId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setListing(docSnap.data());
        console.log("listing", docSnap.data());
        setLoading(false);
      }
    }

    fetchListing();
  }, [listingId]);

  if (loading) {
    return <Spinner />;
  }

  return <div>{listing.name}</div>;
};

export default Listing;
