import AddVenueForm from "./AddVenueForm";
import Button from "./Button";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import Footer from './Footer'
import HomeHeader from './HomeHeader'
import Header from './AllPagesHeader'

describe("AddVenueForm tests", () => {
  beforeEach(() => {
    const mockedUsedNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockedUsedNavigate,
    }));
  })
  it("confirm that each form field is present", () => {
    render(<AddVenueForm />);
    expect(getVenueName()).toBeInTheDocument();
    expect(getVenueEmail()).toBeInTheDocument();
    expect(getVenueCapacity()).toBeInTheDocument();
    expect(getVenuePostcode()).toBeInTheDocument();
    expect(getVenueCity()).toBeInTheDocument();
    expect(getVenueAddressLine1()).toBeInTheDocument();
    expect(getVenueAddressLine2()).toBeInTheDocument();
    expect(getVenuePrice()).toBeInTheDocument();
    expect(getVenueStartDate()).toBeInTheDocument();
    expect(getVenueEndDate()).toBeInTheDocument();
    expect(getVenueImage()).toBeInTheDocument();
  });
  it("Expect error messages to appear in fields when there is no user input after submit button clicked", () => {
    render(<AddVenueForm />);
    getSubmitButton();
    expect(screen.getByText("Name cannot be blank!")).toBeInTheDocument();
    expect(screen.getByText("Email cannot be blank!")).toBeInTheDocument();
    expect(screen.getByText("Capacity cannot be blank!")).toBeInTheDocument();
    expect(screen.getByText("Postcode cannot be blank!")).toBeInTheDocument();
    expect(screen.getByText("City cannot be blank!")).toBeInTheDocument();
    expect(screen.getByText("Address Line 1 cannot be blank!")).toBeInTheDocument();
    expect(screen.getByText("Please enter a price!")).toBeInTheDocument();
    expect(screen.getByText("Start date cannot be blank!")).toBeInTheDocument();
    expect(screen.getByText("End date cannot be blank!")).toBeInTheDocument();
    expect(screen.getByText("Please enter an image URL!")).toBeInTheDocument();
  });

  it("Expect error messages 'please enter a proper venue name' if length too low or high", () => {
    render(<AddVenueForm />);
    user.type(getVenueName(), "at");
    getSubmitButton();
    expect(
      screen.getByText("Please enter a proper venue name! 3-80 characters")
    ).toBeInTheDocument();
  });

  it("Expect error messages when price and capacity is a negative number", () => {
    render(<AddVenueForm />);
    user.type(getVenueCapacity(), "-2");
    user.type(getVenuePrice(), "-2");
    getSubmitButton();
    expect(
      screen.getByText("Capacity cannot be negative!")
    ).toBeInTheDocument();
    expect(screen.getByText("Price cannot be negative!")).toBeInTheDocument();
  });

  it("Expect form to submit when all fields are validated with confirmation through window alert", () => {
    render(<BrowserRouter><AddVenueForm/></BrowserRouter>)
    user.type(getVenueName(), "Test");
    user.type(getVenueEmail(), "test@test.com");
    user.type(getVenueCapacity(), "500");
    user.type(getVenuePostcode(), "FY1 1HL");
    user.type(getVenueCity(), "Blackpool");
    user.type(getVenueAddressLine1(), "123 Test");
    user.type(getVenueAddressLine2(), "Test");
    user.type(getVenuePrice(), "500");
    user.type(getVenueStartDate(), "2023-08-29");
    user.type(getVenueEndDate(), "2023-08-30");
    user.type(getVenueImage(), "test.jpg");
    getSubmitButton();
    expect (screen.getByText(/form submission successful! your venue has been added!/i)).toBeInTheDocument()
  });

  it("Expect page switch to home page are pressing close on the modal", () => {
    render(<BrowserRouter><AddVenueForm/></BrowserRouter>)
    user.type(getVenueName(), "Test");
    user.type(getVenueEmail(), "test@test.com");
    user.type(getVenueCapacity(), "500");
    user.type(getVenuePostcode(), "Te1 1ST");
    user.type(getVenueCity(), "Test");
    user.type(getVenueAddressLine1(), "123 Test");
    user.type(getVenueAddressLine2(), "Test");
    user.type(getVenuePrice(), "500");
    user.type(getVenueStartDate(), "2023-08-29");
    user.type(getVenueEndDate(), "2023-08-30");
    user.type(getVenueImage(), "test.jpg");
    getSubmitButton();
    getCloseButton();
    expect(window.location.pathname).toEqual("/home");
  });

  it("Expect venue name and price to clear when reset button clicked", () => {
    render(<AddVenueForm />);
    user.type(getVenueName(), "The Winter Gardens");
    user.type(getVenuePrice(), "500");
    getSubmitButton();
    expect(screen.getByDisplayValue("The Winter Gardens")).toBeInTheDocument();
    expect(screen.getByDisplayValue("500")).toBeInTheDocument();
    getResetButton();
    expect(screen.queryByDisplayValue("The Winter Gardens")).not.toBeInTheDocument();
    expect(screen.queryByDisplayValue("500")).not.toBeInTheDocument();
  });

  function getCloseButton(){
    user.click(screen.getByText(/close/i))
  }

  function getSubmitButton() {
    user.click(screen.getByRole("button", { name: /submit/i }));
  }
  function getResetButton() {
    user.click(screen.getByRole("button", { name: /clear fields/i }));
  }
  function getVenueName() {
    return screen.getByRole("textbox", { name: /venue name/i });
  }

  function getVenueEmail() {
    return screen.getByRole('textbox', {name: /enter the email associated with the venue/i
    })
  }

  function getVenueCapacity() {
    return screen.getByRole("spinbutton", { name: /venue capacity/i });
  }

  function getVenuePostcode() {
    return screen.getByRole("textbox", { name: /venue postcode/i });
  }

  function getVenueCity() {
    return screen.getByRole("textbox", { name: /venue city/i });
  }

  function getVenueAddressLine1() {
    return screen.getByRole("textbox", { name: /venue address line 1/i });
  }

  function getVenueAddressLine2() {
    return screen.getByRole("textbox", { name: /venue address line 2/i });
  }

  function getVenuePrice() {
    return screen.getByRole("spinbutton", { name: /venue price/i });
  }

  function getVenueStartDate() {
    return screen.getByLabelText(/venue start date/i);
  }

  function getVenueEndDate() {
    return screen.getByLabelText(/venue end date/i);
  }

  function getVenueImage() {
    return screen.getByRole("textbox", { name: /venue image/i });
  }
});

describe("Button tests", () => {
  function clickButton() {
    user.click(screen.getByText(/All venues/i));
  }
  it("Test button render", () => {
    //Arrange
    render(
      <BrowserRouter>
        <Button title="Dazza" />
      </BrowserRouter>
    );

    //Act
    const buttons = screen.getAllByRole("button");

    //Assert
    expect(buttons).toHaveLength(1);
  });

  it("Test button text", () => {
    //Arrange
    render(
      <BrowserRouter>
        <Button title="Dazza" />
      </BrowserRouter>
    );

    //Act
    const text = screen.getAllByText("Dazza");

    //Assert
    expect(text).toHaveLength(1);
  });
  it("Renders properly", () => {
    const history = createMemoryHistory();
    render(
      <BrowserRouter history={history}>
        <Button path="/AllVenues" title="All Venues" />{" "}
      </BrowserRouter>
    );
    clickButton();
    expect(window.location.pathname).toEqual("/AllVenues");
  });
});

describe("Footer display tests", () =>{
  it("Renders footer text", () => {
    render(<BrowserRouter><Footer/></BrowserRouter>)
    const footer = screen.getByText(/2022 Gigstr/i)
    expect(footer).toBeInTheDocument()
  })

  it("Renders footer links", () => {
    render(<BrowserRouter><Footer/></BrowserRouter>)
    const footerLink = screen.getByText(/ActSent/i)
    expect(footerLink).toBeInTheDocument()
  })
})

// describe("Footer links work", () => {
//   it("Changes page to Actciting home page",() =>{
//       const history = createMemoryHistory();
//       render(<BrowserRouter history={history}><Footer/></BrowserRouter>);
//       userEvent.click(screen.getByText(/ActCiting/))
//       expect(window.location.pathname).toEqual('/')
//   })
//   it("Changes page to ActSent home page",() =>{
//     const history = createMemoryHistory();
//     render(<BrowserRouter history={history}><Footer/></BrowserRouter>);
//     userEvent.click(screen.getByText(/ActSent/))
//     expect(window.location.pathname).toEqual('/')
//   })
//   it("Changes page to ActCept home page",() =>{
//     const history = createMemoryHistory();
//     render(<BrowserRouter history={history}><Footer/></BrowserRouter>);
//     userEvent.click(screen.getByText(/ActCept/))
//     expect(window.location.pathname).toEqual('/')
//   })
// })

describe("Home Header tests", () =>{
  it("Renders Header",()=>{
    render(<BrowserRouter><HomeHeader/></BrowserRouter>)
    const header = screen.getByText(/actcited/i)
    expect(header).toBeInTheDocument()
  })

 it("Renders add new venue button",() =>{
  render(<BrowserRouter><HomeHeader/></BrowserRouter>)
  const button = screen.getAllByRole("button");
  expect(button).toHaveLength(1);
 })

 it("When add new venue button is clicked, takes you to new page",()=>{
  render(<BrowserRouter><HomeHeader/></BrowserRouter>)
  user.click(screen.getByText(/add new venue/i));
  expect(window.location.pathname).toEqual("/AddVenue");
 })
})

describe("All Header tests", () =>{
  it("Renders Header text",()=>{
    render(<BrowserRouter><Header/></BrowserRouter>)
    const header = screen.getByText(/actcited/i)
    expect(header).toBeInTheDocument()
  })
})