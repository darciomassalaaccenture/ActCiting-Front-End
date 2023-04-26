import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import {BrowserRouter} from 'react-router-dom'
import AllCards from "./AllCards";
import GetVenuesHelper from "./GetVenuesHelper";
import VenueCard from "./VenueCard";
import user from "@testing-library/user-event";

describe("Testing Venue Card", () => {
  const venue = {
    id: 1,
    name: "winter gardens",
    address: "1 Promenade Way",
    city: "Blackpool",
    image:
      "https://www.visitbritain.com/sites/default/files/styles/image_gallery_with_text/public/consumer/paragraphs-bundles/image-gallery-with-text/b1.jpg?itok=XT4pjM-3",
  };

  it("Renders the card", () => {
    render(<BrowserRouter><VenueCard name={venue.name} /> </BrowserRouter>);
    const card = screen.getByText(/view venue/i);
    expect(card).toBeInTheDocument();
  });
  it("Renders an image", () => {
    render(<BrowserRouter><VenueCard image={venue.image}/> </BrowserRouter>);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });
  it("Renders venue name", () => {
    render(<BrowserRouter><VenueCard name={venue.name} /></BrowserRouter>);
    const name = screen.getByText(/winter gardens/i);
    expect(name).toBeInTheDocument();
  });
  it("Renders venue address", () => {
    render(<BrowserRouter><VenueCard address={venue.address} /></BrowserRouter>);
    const address = screen.getByText(/way/i);
    expect(address).toBeInTheDocument();
  });
  it("Renders venue city", () => {
    render(<BrowserRouter><VenueCard city={venue.city} /></BrowserRouter>);
    const city = screen.getByText(/Blackpool/i);
    expect(city).toBeInTheDocument();
  });
  it("Renders view venue button", () => {
    render(<BrowserRouter><VenueCard venue={venue.id} /></BrowserRouter>);
    expect(
      screen.getByRole("button", {
        name: /view venue/i,
      })
    ).toBeInTheDocument();
  });
});

// describe("Testing AllCards", () => {
//     const venue ={
//         id: 1,
//         name: "winter gardens",
//         address: "1 Promenade Way",
//         city: "Blackpool",
//         image:
//           "https://www.visitbritain.com/sites/default/files/styles/image_gallery_with_text/public/consumer/paragraphs-bundles/image-gallery-with-text/b1.jpg?itok=XT4pjM-3",
//       };
//       it("Returns venue card", () =>{
//         render(<AllCards props={venue}/>)
//         const image = screen.getByCl("img");
//         expect(image).toBeInTheDocument();
//       })
// });
