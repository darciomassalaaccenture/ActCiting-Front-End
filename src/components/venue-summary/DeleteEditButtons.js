import React, {useState} from "react";
import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import DeleteModal from './DeleteModal';

const DeleteEditButtons = (props)=> {
    const [isShown, setIsShown] = useState(false)

    const deleteVenueHandler = () =>{
        setIsShown(current => !current)
    }
    
return (
  <>
    <Row>
      <Col md={4}>
      </Col>
      <Col md={{ span: 4, offset: 4 }}>
        <Button
          className="submit-button"
          type="delete"
          aria-label="delete venue"
          onClick={deleteVenueHandler}
        >
          Delete Venue
        </Button>
      </Col>
      <br />
    </Row>
    <br></br>
    {isShown && <DeleteModal venue_id={props.venue_id} />}
  </>
);
}

export default DeleteEditButtons;