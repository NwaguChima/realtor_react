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
import "swiper/css/bundle";
import { FaShare } from "react-icons/fa";

const Listing = () => {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shareLinkCopied, setShareLinkCopied] = useState(false);
  const { listingId } = useParams();
  SwiperCore.use([Autoplay, Navigation, Pagination]);

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

  useEffect(() => {
    if (shareLinkCopied) {
      setTimeout(() => {
        setShareLinkCopied(false);
      }, 2000);
    }

    return () => {
      clearTimeout();
    };
  }, [shareLinkCopied]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <main>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ type: "progressbar" }}
        effect="fade"
        modules={[EffectFade]}
        autoplay={{ delay: 3000 }}
      >
        {listing.imgUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full overflow-hidden h-[300px]"
              style={{
                background: `url(${listing.imgUrls[index]}) center no-repeat`,
                backgroundSize: "cover",
              }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="fixed top-[13%] right-[3%] z-10 bg-white cursor-pointer border-2 border-gray-400 rounded-full w-12 h-12 flex justify-center items-center"
        onClick={() => {
          navigator.clipboard.writeText(window.location.href);
          setShareLinkCopied(true);
        }}
      >
        <FaShare className="text-lg text-slate-500" />
      </div>
      {shareLinkCopied && (
        <p className="fixed top-[18%] right-[5%] font-semibold border-2 border-gray-400 rounded-md bg-white z-10 p-2">
          Link Copied
        </p>
      )}

      <div className="flex flex-col md:flex-row max-w-6xl lg:mx-auto p-4 rounded-lg bg-white lg:space-x-5">
        <div className="bg-pink-300 w-full h-[200px] lg:h-[400px]"></div>
        <div className="bg-blue-300 w-full h-[200px] lg:h-[400px] z-10 overflow-x-hidden"></div>
      </div>
    </main>
  );
};

export default Listing;
