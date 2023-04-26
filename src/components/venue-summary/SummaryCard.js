import {React} from "react";
import VenueSummaryCard from "./VenueSummaryCard";

const newCard = (venue) =>{
    return(
        <VenueSummaryCard
        name = {venue.venue_name}
        capacity ={venue.venue_capacity}
        address = {venue.venue_address_line1}
        geolocation = {venue.venue_city}
        email = {venue.venue_email}
        start_date = {venue.venue_availability_start}
        end_date = {venue.venue_availability_end}
        />
    );
}
function SummaryCard(props){
    return <div className="summary-cards">{props.venue.map(newCard)}</div>;
}
export default SummaryCard;