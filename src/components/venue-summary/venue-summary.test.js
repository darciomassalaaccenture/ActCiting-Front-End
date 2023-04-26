import { render, screen } from "@testing-library/react";
import VenueSummaryCard from "./VenueSummaryCard.js";
import DeleteEditButtons from"./DeleteEditButtons.js"
import user from "@testing-library/user-event";
import DeleteModal from "./DeleteModal.js";
import React from 'react'
import SummaryCard from "./SummaryCard.js";

describe("Testing SummaryCard Component", () => {
  const venue = {
    name: "The Winter Gardens",
    venue_capacity: 500,
    venue_address_line1: "123 Promenade",
    venue_city: "Blackpool",
    
    venue_email: "bplwintergardens@gmail.com",
    venue_availability_start: "29-08-2022",
    venue_end_date: "2022-08-30",
  };
  
  it("Renders with passed through information", () => {
    render(<VenueSummaryCard name={venue.name} 
        capacity ={venue.venue_capacity} address ={venue.venue_address_line1}
        geolocation ={venue.venue_city} email ={venue.venue_email} 
        />);
    const name = screen.getByText(/The Winter Gardens/i);
    expect(name).toBeInTheDocument();
    const capacity = screen.getByText(/500/);
    expect(capacity).toBeInTheDocument();
    const address = screen.getByText(/Prom/);
    expect(address).toBeInTheDocument();
    const geo = screen.getByText(/Blackpool/)
    expect(geo).toBeInTheDocument();
    const email =screen.getByText(/gmail/)
    expect(email).toBeInTheDocument();
   

  });

});

describe("Testing Delete Edit Buttons component", () =>{

it("Renders delete button", () =>{
  render(<DeleteEditButtons venue_id={1}/>)
  const del = screen.getByRole('button', {
    name: /delete venue/i
  })
  expect(del).toBeInTheDocument()

})
it("On click calls deleteVenueHandler",()=>{
  render(<DeleteEditButtons venue_id={1}/>)
  user.click(screen.getByText(/delete venue/i));
  const alertMessage = screen.getByText(/Are you sure you want to delete this venue?/)
  expect(alertMessage).toBeInTheDocument()

})
})
describe("Testing delete Modal", () =>{
  const venue_id = {
    venue_id:1
  }
  it("Renders delete modal",() =>{
    render(<DeleteModal venue={venue_id}/> )
    const alertMessage = screen.getByText(/Are you sure you want to delete this venue?/)
    expect(alertMessage).toBeInTheDocument()
  })
  it("Renders delete button",() =>{
    global.alert = jest.fn();
    render(<DeleteModal venue={venue_id}/> )
    const button = screen.getByRole('button', {
      name: /delete/i
    })
    expect(button).toBeInTheDocument()
    
  })
  it("Calls delete venue function", () =>{
    global.alert = jest.fn();
    render(<DeleteModal venue={venue_id}/> )
    const button = screen.getByRole('button', {
      name: /delete/i
    })
    user.click(button)
    expect(alert).toHaveBeenCalledTimes(1)
  })
  it("Renders the go back button",()=>{
    render(<DeleteModal venue={venue_id}/> )
    const button = screen.getByRole('button', {
      name: /go back/i
    })
    expect(button).toBeInTheDocument()
  })

})

