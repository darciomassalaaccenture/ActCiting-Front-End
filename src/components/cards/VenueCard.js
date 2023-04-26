import Card from "react-bootstrap/Card"
import Button from "../Button"
import '../Header.css'

const VenueCard = (props) => {


    return (
      <Card className="flex-center" style={{ width: '20rem', backgroundColor:"#D9D9D9", margin:"1rem", color:"black"}}>
        <Card.Img variant="top" src={props.image} style={{height:'13rem', overflow:"hidden"}}/>
        <Card.Body>
          <Card.Title><p>{props.name}</p></Card.Title>
          <Card.Text style={{textAlign:"left", fontSize:"1rem"}}>
            {props.city}<br/>
            {props.address}
          </Card.Text>
          <Button className="submit-button" title="View Venue" path={`/VenueSummary/${props.name}/${props.id}`}/>
          
        </Card.Body>
      </Card>
      
    );
  }
 

export default VenueCard

