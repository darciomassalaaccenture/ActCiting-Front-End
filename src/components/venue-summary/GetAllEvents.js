import { React, useEffect, useState } from "react";
import DeleteEditButtons from "./DeleteEditButtons";

const GetAllEvents = (props) =>{
    const [buttonShow, setButtonShow] = useState(false);

    const BASEURL =
      "https://mx3v3ehiyj.execute-api.eu-west-2.amazonaws.com/dev";
  
    const getAllEventsById = (venue_id) => {
        fetch(`${BASEURL}/gigstr/venues/all-events/${venue_id}`, {
          method: "GET",
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.status_code === 404){
                setButtonShow(true);
            }
           
          });
      
    };
    useEffect(() => {
      getAllEventsById(props.venue_id);
    }, []);

    return(
        <>
        {buttonShow && (<DeleteEditButtons venue_id={props.venue_id}/>)}

        </>
    )
}
export default GetAllEvents;
