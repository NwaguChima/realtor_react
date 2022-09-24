import React from "react";
import spinner from "../assets/svg/spinner.svg";

const Spinner = () => {
  return (
    <div>
      <div>
        <img src={spinner} alt="loading" className="h-24" />
      </div>
    </div>
  );
};

export default Spinner;
