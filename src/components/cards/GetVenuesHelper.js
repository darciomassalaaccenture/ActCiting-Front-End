import { React, useEffect, useState } from "react";
import AllCards from "./AllCards";

const GetVenuesHelper = (props) => {
  const [venues, setVenues] = useState([]);

  const BASEURL = "https://mx3v3ehiyj.execute-api.eu-west-2.amazonaws.com/dev";

  const getVenues = () => {
    fetch(BASEURL + "/gigstr/venues/venue-details/get-all-venues")
      .then((res) => res.json())
      .then((data) => {
        setVenues(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getVenues();
  }, []);

  return (
    <>
      {venues!==[] && <AllCards venues={venues} />}
    </>
  );
};
export default GetVenuesHelper;
