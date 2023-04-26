import {React} from "react";
import EventRequestCard from './EventRequestCard'
import formatDate from '../../helpers/formatDate'
const newCard = (event) =>{
    
    return(<EventRequestCard
    id = {event}
        name = {event.event_name}
        date = {formatDate(event.start_date)}
        booking_status = {event.booking_status}
        />
        )
}
function RequestCard(props){
    return (
        <div className="request-cards">
            {props.events.map(newCard)}
        </div>

    );
}
export default RequestCard;