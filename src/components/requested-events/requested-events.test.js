import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import EventRequestCard from "./EventRequestCard";
import GetPendingEvents from "./GetPendingEvents";
import RequestCard from "./RequestCard";
import user from '@testing-library/user-event';
import { renderMatches } from "react-router-dom";

describe("Requested events test", ()=>{
    const getAcceptButton = () =>{
        user.click(screen.getByText(/accept/i))
    }
    const getDeclineButton = () =>{
        user.click(screen.getByText(/Decline/i))
    }
    const event ={ 
        name: 'Shayla Mcdaniel',
        date: 2022-10-21,
        booking: 'pending'
    }
    it("Renders the card",() =>{
        render(<EventRequestCard/>)
        const name = screen.getByText(/event name:/i)
        expect(name).toBeInTheDocument()
    })
    it("Renders the card event name",() =>{
        render(<EventRequestCard/>)
        const name = screen.getByText(/event name:/i)
        expect(name).toBeInTheDocument()
    })
    it("Renders the card event name name",() =>{
        render(<EventRequestCard name ={event.name}/>)
        const name = screen.getByText(/shayla/i)
        expect(name).toBeInTheDocument()
    })
    it("Renders the card date",() =>{
        render(<EventRequestCard/>)
        const date = screen.getByText(/event date:/i)
        expect(date).toBeInTheDocument()
    })
    // it("Renders the card's event date",() =>{
    //     render(<EventRequestCard date ={2022-10-21}/>)
    //     const date = screen.getByText(/10/i)
    //     expect(date).toBeInTheDocument()
    // })
    it('Renders event booking status', ()=>{
        render(<EventRequestCard/>)
        const status = screen.getByText(/event booking status:/i)
        expect(status).toBeInTheDocument()
    })
    it('Renders event booking status: pending', ()=>{
        render(<EventRequestCard booking_status={event.booking}/>)
        const status = screen.getByText(/pending/i)
        expect(status).toBeInTheDocument()
    })
    it('Renders accept button',()=>{
        render(<EventRequestCard/>)
        expect(screen.getByRole('button', {
            name: /accept/i
          })).toBeInTheDocument()
    })
  
    it('Renders decline button',()=>{
        render(<EventRequestCard event_id={1}/>)
        expect(screen.getByRole('button', {
            name: /decline/i
          })).toBeInTheDocument()
    })
    it("Calls accept func", () =>{
        global.alert = jest.fn();
        let id = {
            event_id:1
        }
        render(<EventRequestCard id ={id}/>)
        getAcceptButton()
        expect(alert).toHaveBeenCalledTimes(1)    
    
    })
    it("Calls decline func", () =>{
        global.alert = jest.fn();
        let id = {
            event_id:1
        }
        render(<EventRequestCard id ={id}/>)
        getDeclineButton()
        expect(alert).toHaveBeenCalledTimes(1)

    
    })
})
