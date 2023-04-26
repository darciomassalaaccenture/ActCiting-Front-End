import React,{useState} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const EventRequestCard = (props) => {
  
  const[val ,setVal]  = useState(0)
  const updateEventStatus = async (status) => {
    const BASEURL = "https://mx3v3ehiyj.execute-api.eu-west-2.amazonaws.com/dev";
    let payload = {
      booking_status: status.booking_status,
      event_id: status.event_id
    };
    
    try {
      let res = await fetch(
        `${BASEURL}/gigstr/venues/update/event-booking-status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      )
        .then((res) => {
          return res.json();
        })
        .then((jsonResponse) => console.log(jsonResponse));
    } catch (err) {
      console.log(err + " failed to update event status");
    }
  };

  const handleAccept = (e) => {
    alert(` ${props.name} has been accepted`);
    e.preventDefault();
    let acceptStatus = {
      booking_status: "accepted",
      event_id: props.id.event_id,
    };
    updateEventStatus(acceptStatus);

    return 'accept'
  };

  const handleDecline = (e) => {
    e.preventDefault();
    let rejectStatus = {
      booking_status: "declined",
      event_id: props.id.event_id,
    };
    updateEventStatus(rejectStatus);
    setVal(val => val+1)
    alert(` ${props.name} has been rejected`);
  };

  return (
    <Card
      className="flex-center" aria-label="Event request for venue"
      style={{ backgroundColor: "#798086 ", margin: "1rem", color: "black" }}>
      <Card.Body>
        <Card.Text
          style={{ textAlign: "left", fontSize: "1rem", color: "black" }}>
          <strong>Event Name: </strong> {props.name}
          <strong> Event Date: </strong> {props.date}
          <strong> Event Booking Status: </strong> {props.booking_status}
        </Card.Text>
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
          <Button variant="success" aria-label="Accept event" onClick={handleAccept}>
            Accept
          </Button>
          <Button variant="danger" aria-label="Decline event" onClick={handleDecline}>
            Decline
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
export default EventRequestCard;
