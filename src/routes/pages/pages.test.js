import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "./Home";
import AddVenue from "./AddVenue"
import AddVenueForm from '../../components/AddVenueForm'
import Button from '../../components/Button'
import VenueSummaryPage from "./VenueSummaryPage";
import HomeHeader from "../../components/HomeHeader";
import Footer from "../../components/Footer";
describe('home page display test', () => {
    
      
    it('should render header on home page',() => {
        render(<BrowserRouter><HomeHeader/></BrowserRouter>);
        const headerDisplay = screen.getByText(/Part of GigStr/i)
        expect(headerDisplay).toBeInTheDocument();
      })
  
      it('should find button on home page',() => {
          render(<BrowserRouter><Home/></BrowserRouter>);
          const button = screen.getByText(/Add New Venue/i)
          expect(button).toBeTruthy();
      })
  
      it('should find navbar on home page',() => {
          render(<BrowserRouter><App/></BrowserRouter>);
          const nav = screen.getByText(/All Venues/i)
          expect(nav).toBeInTheDocument();
        })
  
      it('should render footer on home page',() => {
          render(<BrowserRouter><Footer/></BrowserRouter>);
          const footerDisplay = screen.getByText(/2022/i)
          expect(footerDisplay).toBeInTheDocument();
      })
})
describe('add venue page test', () =>{
    it("should render navbar on home page", () =>{
        render(<BrowserRouter><App/></BrowserRouter>);
        const nav = screen.getByText(/All Venues/i)
        expect(nav).toBeInTheDocument();
    })
    
    it("should render add venue form",()=>{
        render(<BrowserRouter> <AddVenue><AddVenueForm/></AddVenue></BrowserRouter>)
        const form =screen.getByText(/Postcode/i)
        expect(form).toBeInTheDocument();
    })

    it("should render home button", () =>{
        render(<BrowserRouter><AddVenue><Button/></AddVenue> </BrowserRouter>)
        const button =screen.getByText(/Home/i)
        expect(button).toBeInTheDocument();
    })
})
describe('venue summary page', () =>{
    it("should render",() =>{
        render(<BrowserRouter><VenueSummaryPage/></BrowserRouter>)
        const title = screen.getByText(/Summary page/i)
        expect(title).toBeInTheDocument()
    })
})


describe("page exists test", () => {
    it("should render home page", () => {
        render(<BrowserRouter><App/></BrowserRouter>)
        const linkElement = screen.getByText(/home/i)
        expect(linkElement).toBeInTheDocument()
    })

    it("should render all venues page", () => {
        render(<BrowserRouter><App/></BrowserRouter>)
        const linkElement = screen.getByText(/all venues/i)
        expect(linkElement).toBeInTheDocument()
    })


    it("should render Add Venue page", () => {
        render(<BrowserRouter><App/></BrowserRouter>)
        const linkElement = screen.getByText(/Add Venue/i)
        expect(linkElement).toBeInTheDocument()
    })
    
})

