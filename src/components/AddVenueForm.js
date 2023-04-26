import { React, useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";
import BootstrapButton from 'react-bootstrap/Button'
import { Col, Row } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import Button from './Button';
import './Header.css'

const AddVenueForm = () => {
  const BASEURL = "https://mx3v3ehiyj.execute-api.eu-west-2.amazonaws.com/dev";
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      handleShow();
      postVenueForm(form);
    }
  };

  const handleReset = () => {
    setField({
      form: [null],
    });
  };

  const findFormErrors = () => {
    const {
      name,
      email,
      capacity,
      postcode,
      city,
      addressLine1,
      addressLine2,
      price,
      startDate,
      endDate,
      image,
    } = form;
    const newErrors = {};
    
    if (!name || name === "") newErrors.name = "Name cannot be blank!";
    else if (name.length < 3 || name.length > 80)
      newErrors.name = "Please enter a proper venue name! 3-80 characters";

    if (!email || email === "") newErrors.email = "Email cannot be blank!";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
      newErrors.email = "Email needs to be in right format!With an @ and a ." ;
    else if (email.length > 80) newErrors.email = "Email is too long!";

    if (!capacity || capacity === "")
      newErrors.capacity = "Capacity cannot be blank!";
    else if (capacity < 0) newErrors.capacity = "Capacity cannot be negative!";

    if (!postcode || postcode === "")
      newErrors.postcode = "Postcode cannot be blank!";
    else if (postcode.length > 8)
      newErrors.postcode = "Postcode is too long for a UK postcode!";
    else if (
      !/^([A-Z][A-HJ-Y]?[0-9][A-Z0-9]? ?[0-9][A-Z]{2}|GIR ?0A{2})$/i.test(
        postcode
      )
    )
      newErrors.postcode = "postcode needs to be in the right UK format";

    if (!city || city === "") newErrors.city = "City cannot be blank!";
    else if (city.length > 50) newErrors.city = "City name is too long! Below 50 characters";

    if (!addressLine1 || addressLine1 === "")
      newErrors.addressLine1 = "Address Line 1 cannot be blank!";
    else if (addressLine1.length > 80)
      newErrors.addressLine1 = "Address line 1 is too long! 80 character max";

      if (addressLine2 !=null || (addressLine2 !== undefined)){
        if(addressLine2.length>80){
          newErrors.addressLine2 = "Address line 2 is too long!80 character max";
        }

       }


    if (!price || price === "") newErrors.price = "Please enter a price!";
    else if (price < 0) newErrors.price = "Price cannot be negative!";

    if (!startDate || startDate === "")
      newErrors.startDate = "Start date cannot be blank!";

    if (!endDate || endDate === "")
      newErrors.endDate = "End date cannot be blank!";

    if (!image || image === "") newErrors.image = "Please enter an image URL!";
    else if (!image.includes('jpg')) newErrors.image = "Image URL has to be in format of .jpg sorry";
    return newErrors;
  };

  const postVenueForm = async (form) => {
    let payload = {
      venue_name: form.name,
      venue_email: form.email,
      venue_capacity: Number(form.capacity),
      venue_postcode: form.postcode,
      venue_city: form.city,
      venue_address_line1: form.addressLine1,
      venue_address_line2: form.addressLine2,
      venue_price: Number(form.price),
      venue_availability_start: form.startDate,
      venue_availability_end: form.endDate,
      venue_picture_url: form.image,
    };
    try {
      let venueForm = form;
      let res = await fetch(`${BASEURL}/gigstr/venues/new-venue`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          return res.json();
        })
        .then((jsonResponse) => console.log(jsonResponse));
    } catch (err) {
      console.log(err + " failed to post new venue");
    }
        }
    return (
        <div className="format-form">
            <Form aria-label='Add venue'>
                <Form.Group className="mb-3" controlId="formVenueName">
                    <Form.Label>Venue Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter the venue name" aria-label="Enter the venue name" onChange={e => setField('name', e.target.value)}
                    isInvalid={ !!errors.name } 
                    />
                    <Form.Control.Feedback type='invalid' aria-invalid="true">{ errors.name }</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="Add Venue Owner Email" controlId="formVenueEmail">
                    <Form.Label>Venue Email</Form.Label>
                    <Form.Control type="text" placeholder="Enter the email associated with the venue" aria-label="Enter the email associated with the venue" onChange={e => setField('email', e.target.value)}
                    isInvalid={ !!errors.email }
                    />
                    <Form.Control.Feedback type='invalid' aria-invalid="true">{ errors.email }</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="Add Venue Form" controlId="formVenueCapacity">
                    <Form.Label>Venue Capacity</Form.Label>
                    <Form.Control type="number" placeholder="Enter the venue capacity" aria-label="Enter the venue capacity" onChange={e => setField('capacity', e.target.value)}
                    isInvalid={ !!errors.capacity }
                    />
                    <Form.Control.Feedback type='invalid' aria-invalid="true">{ errors.capacity }</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPostcode">
                    <Form.Label>Venue Postcode</Form.Label>
                    <Form.Control type="text" placeholder="Enter the venue postcode (only UK postcodes accepted)" aria-label="Enter the venue postcode (only UK postcodes accepted)" onChange={e => setField('postcode', e.target.value)}
                    isInvalid={ !!errors.postcode }
                    />
                    <Form.Control.Feedback type='invalid' aria-invalid="true">{ errors.postcode }</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formVenueCity">
                    <Form.Label>Venue City</Form.Label>
                    <Form.Control type="text" placeholder="Enter the venue city" aria-label="Enter the venue city" onChange={e => setField('city', e.target.value)}
                    isInvalid={ !!errors.city }
                    />
                    <Form.Control.Feedback type='invalid' aria-invalid="true">{ errors.city }</Form.Control.Feedback>
                </Form.Group>

                <Row className="mb-3">
                <Form.Group as={Col} controlId="formVenueAddressLine1">
                    <Form.Label>Venue Address Line 1</Form.Label>
                    <Form.Control type="text" placeholder="Enter the venue address Line 1" aria-label= "Enter the venue address Line 1" onChange={e => setField('addressLine1', e.target.value)}
                    isInvalid={ !!errors.addressLine1 }
                    />
                    <Form.Control.Feedback type='invalid' aria-invalid="true">{ errors.addressLine1 }</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formVenueAddressLine2">
                    <Form.Label>Venue Address Line 2</Form.Label>
                    <Form.Control type="text" placeholder="Enter the venue address Line 2" aria-label="Enter the venue address Line 2" onChange={e => setField('addressLine2', e.target.value)}
                     isInvalid={ !!errors.addressLine2 }
                     />
                     <Form.Control.Feedback type='invalid'>{ errors.addressLine2 }</Form.Control.Feedback>
                 </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formVenuePrice">
                    <Form.Label>Venue Price</Form.Label>
                    <Form.Control type="number" placeholder="Enter the venue price" aria-label="Enter the venue price" onChange={e => setField('price', e.target.value)}
                    isInvalid={ !!errors.price }
                    />
                    <Form.Control.Feedback type='invalid' aria-invalid="true">{ errors.price }</Form.Control.Feedback>
                </Form.Group>

                <Row className="mb-3">
                <Form.Group as={Col} controlId="formVenueStartDate">
                    <Form.Label>Venue Start Date</Form.Label>
                    <Form.Control type="date" placeholder="Enter the venue start date" aria-label="Enter the venue start date" onChange={e => setField('startDate', e.target.value)}
                    isInvalid={ !!errors.startDate }
                    />
                    <Form.Control.Feedback type='invalid' aria-invalid="true">{ errors.startDate }</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} controlId="formVenueEndDate">
                    <Form.Label>Venue End Date</Form.Label>
                    <Form.Control type="date" placeholder="Enter the venue end date" aria-label="Enter the venue end date" onChange={e => setField('endDate', e.target.value)}
                    isInvalid={ !!errors.endDate }
                    />
                    <Form.Control.Feedback type='invalid' aria-invalid="true">{ errors.endDate }</Form.Control.Feedback>
                </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formVenueImage">
                    <Form.Label>Venue Images</Form.Label>
                    <Form.Control type="text" placeholder="Enter the venue image URL" aria-label="Enter the venue image URL" onChange={e => setField('image', e.target.value)}
                       isInvalid={ !!errors.image }
                       />
                       <Form.Control.Feedback type='invalid' aria-invalid="true">{ errors.image }</Form.Control.Feedback>
                </Form.Group>


                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    <BootstrapButton className="reset-button" type='reset' onClick= {handleReset}>Clear Fields</BootstrapButton>
                    <BootstrapButton className="reset-button" type='submit' onClick= {handleSubmit}>Submit</BootstrapButton>

                </div>
      </Form>
      <div className="row">
        <br />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Form Submission successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Form Submission successful! Your Venue has been added!</Modal.Body>
        <Modal.Footer>
          <Button type = "button" path="/home" title = "Close" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default AddVenueForm;
