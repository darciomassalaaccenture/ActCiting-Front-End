import { React, useEffect, useState } from "react";
import SummaryCard from "./SummaryCard";

const GetVenue = (props) => {
  const [venues, setVenue] = useState([]);
  const BASEURL = "https://mx3v3ehiyj.execute-api.eu-west-2.amazonaws.com/dev";

  const getVenueByID = (venue_id) => {
    
    fetch(`${BASEURL}/gigstr/venues/venue-details-for/${venue_id}`)
      .then((res) => res.json())
      .then((data) => {
        setVenue(data);
      })
      .catch((error) => {
        console.log("theres been an error" + error);
      });
  };
  useEffect(() => {
    getVenueByID(props.venue_id);
  }, [props.venue_id]);

  return (
    <>
      <SummaryCard venue={venues} />
    </>
  );
};
export default GetVenue;
