import { render, screen } from "@testing-library/react";
import React from "react";
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { BrowserRouter} from "react-router-dom";
import NavBar from "./NavBar";
import App from '../../App'


describe('renders Navbar', () =>{
    it('renders navbar component',() =>{
        render(<BrowserRouter><NavBar/></BrowserRouter>)
        const home = screen.getByText(/Home/i)
        expect(home).toBeInTheDocument()
    })

    it('finds by name as aria-label',() =>{
        render(<BrowserRouter><NavBar/></BrowserRouter>)
        const ariaButton = screen.getByRole('button', {name: 'Home'})
        expect(ariaButton).toBeTruthy()
    })
})
describe("Navbar links work", () => {
    it("Changes page to Home page",() =>{
        const history = createMemoryHistory();
        render(<BrowserRouter history={history}><App/></BrowserRouter>);
        userEvent.click(screen.getByText(/Home/))
        expect(window.location.pathname).toEqual('/')
    })

    it("Changes page to All Venues page",() =>{
        const history = createMemoryHistory();
        render(<BrowserRouter history={history}><App/></BrowserRouter>);
        userEvent.click(screen.getByText(/All Venues/))
        expect(window.location.pathname).toEqual('/AllVenues')
    })

})