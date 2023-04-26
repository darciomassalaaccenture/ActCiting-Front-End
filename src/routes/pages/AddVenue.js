import React from "react";
import AddVenueForm from "../../components/AddVenueForm";
import Button from "../../components/Button";
import AllPagesHeader from "../../components/AllPagesHeader"

const AddVenue = () => {
  return (
    <>
    <AllPagesHeader/>
    <br/>
      <h1>Add New Venue</h1>
      <AddVenueForm />
      <Button className = "submit-button" type="button" id="summary-homeButton" title="Home" path="/home">Home</Button>
    </>
  );
};

export default AddVenue;
