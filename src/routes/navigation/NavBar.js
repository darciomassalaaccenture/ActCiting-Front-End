import Nav from "react-bootstrap/Nav";
import './NavBar.css'

import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <Nav variant="pills" defaultActiveKey="#first">
         <div className="me-auto my-4" style={{width: "420px", color: "white"}}><h5>ActCiting | Part of GigStr</h5></div>
        <Nav.Item >
          <Nav.Link aria-label="Home" onClick={()=> navigate("/")}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link aria-label="All Venues" onClick={()=> navigate("/AllVenues")}>All Venues</Nav.Link>
        </Nav.Item>
     
    </Nav>
  );
};

export default NavBar;