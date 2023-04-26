import React from "react";
import GetVenuesHelper from "../../components/cards/GetVenuesHelper";
import AllPagesHeader from "../../components/AllPagesHeader";

const AllVenues = () => {
  return (
    <div className="All venues" aria-label="All venues">
      <AllPagesHeader />
      <br/>
      <h1>ALL VENUES</h1>
      <GetVenuesHelper/>
    </div>
  );
};

export default AllVenues;
