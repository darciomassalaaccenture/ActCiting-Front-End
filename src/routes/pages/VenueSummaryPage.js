import React from "react";
import GetVenue from "../../components/venue-summary/GetVenue";
import GetPendingEvents from "../../components/requested-events/GetPendingEvents";
import AllPagesHeader from "../../components/AllPagesHeader";
import GetAllEvents from "../../components/venue-summary/GetAllEvents";

const VenueSummaryPage = (props) => {
  var url = window.location.pathname.split("/");
  var venueId = url[url.length - 1];

  return (
    <>
    <AllPagesHeader/>
      <br/>
      <h1 aria-label="Venue summary page">Summary page</h1>
      <GetVenue venue_id={venueId}/>
      <GetAllEvents venue_id={venueId}/>
      <h2 aria-label="Events for this venue">Events for this Venue</h2>
      <GetPendingEvents venue_id={venueId} />
    </>
  );
};

export default VenueSummaryPage;
