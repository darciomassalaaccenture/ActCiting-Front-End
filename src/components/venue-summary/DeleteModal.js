import BootstrapButton from 'react-bootstrap/Button'
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
function DeleteModal(props) {
  const [show, setShow] = useState(true);

const deleteVenuesHelper = (venue_id) => {
 
  try {
    const BASEURL =
      "https://mx3v3ehiyj.execute-api.eu-west-2.amazonaws.com/dev";
    fetch(`${BASEURL}/gigstr/venues/delete-venue/${venue_id}`, {
      method: "DELETE",
      body: JSON.parse(venue_id),
    }).then((res) => res.json());
      
  } catch (err) {
    console.log(`${err} failed to delete Venue`);
  }
};
const handleClose = () => setShow(false);

  const DeleteVenue = (e) =>{
    setShow(false)
    deleteVenuesHelper(props.venue_id)
    alert(`venue deleted`)
  }

  return (
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        variant = "danger"
      >
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Are you sure you want to delete this venue?
        </Modal.Body>
        <Modal.Footer>
        <BootstrapButton onClick= {DeleteVenue} variant="btn btn-danger" >
          Delete
        </BootstrapButton>
        <BootstrapButton variant = "btn btn-dark"  onClick={() => setShow(false)}>
          Go Back
        </BootstrapButton>
        </Modal.Footer>
      </Modal>
  )
}

export default DeleteModal;
