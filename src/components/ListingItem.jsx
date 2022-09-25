import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const ListingItem = ({ listing, id }) => {
  return (
    <li>
      <Link to={`/category/${listing.type}/${id}`}>
        <img src={listing.imgUrls[0]} alt="listed home" />
        <Moment fromNow>{listing.timestamp?.toDate()}</Moment>
      </Link>
    </li>
  );
};

export default ListingItem;
