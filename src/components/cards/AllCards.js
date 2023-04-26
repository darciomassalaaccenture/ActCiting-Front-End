import { React } from "react";
import VenueCard from "./VenueCard";
import "./card.css";

const newCard = (venue) => {
  return (<VenueCard
      id={venue.venue_id}
      name={venue.venue_name}
      address={venue.venue_address_line1}
      city={venue.venue_city}
      image={venue.venue_picture_url}
    />
  );
};
function AllCards(props) {
  return <div className="all-cards">{props.venues.map(newCard)}</div>;
}
export default AllCards;
