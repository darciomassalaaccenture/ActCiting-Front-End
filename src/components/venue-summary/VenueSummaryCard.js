import React from "react";
import Card from "react-bootstrap/Card";
import formatDate from '../../helpers/formatDate'

const VenueSummaryCard = (props) => {

    return (
    <Card
      className="flex-center"
      style={{ backgroundColor: "#222222 ", margin: "1rem", color: "black" }}
    >
      <Card.Body>
        <Card.Text
          style={{ textAlign: "left", fontSize: "1rem", color: "white" }}
        >
          <strong>Venue Name: </strong> {props.name} <br />
          <strong>Venue Capacity: </strong>
          {props.capacity} <br />
          <strong>Venue Address: </strong> {props.address} <br />
          <strong>Venue Geolocation: </strong> {props.geolocation} <br />
          <strong>Venue Email: </strong>
          {props.email} <br />
          <strong>Venue Start Date: </strong> {formatDate(props.start_date)}
          <br />
          <strong> Venue End Date: </strong> {formatDate(props.end_date)}
          <br />
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
export default VenueSummaryCard;