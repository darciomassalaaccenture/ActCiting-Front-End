import { React, useEffect, useState } from "react";
import RequestCard from "./RequestCard";
import Card from "react-bootstrap/Card"

const GetPendingEvents = (props) => {
  const [events, setEvents] = useState([]);
  const[show, setShow] = useState(false)

  const BASEURL = "https://mx3v3ehiyj.execute-api.eu-west-2.amazonaws.com/dev";
  const getEvents = async(venue_id) => {
    try{
      await fetch(`${BASEURL}/gigstr/venues/pending-events/id/${venue_id}`,{
        method:"GET",
      })
      .then((res) => res.json())
      .then((data) => {       
        if(data.status_code === 404){
          console.log(data.error)
          setShow(false)
        }else{

          setEvents(data);
          setShow(true)

        }
      })
    }catch(err){
      console.log(`${err.status_code} No pending events`);
    }
    
  };
  useEffect(() => {
    getEvents(props.venue_id);
  },[]);

  return(
    <>
    {show && ( <RequestCard events={events}/>)}
    {!show && ( <Card border= "warning" className="flex-center"  style={{margin: "1rem", border: "solid"}}>
      <Card.Body>There are no pending events for this venue. Try again later!</Card.Body>
    </Card>)}
    </>
)
};

export default GetPendingEvents;