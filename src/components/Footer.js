import { Card, Nav } from "react-bootstrap";
import './Header.css'
import {useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <Card className="footer-background">
            <Card.Body>
                <Nav className="justify-content-center">
                    <Nav.Item align={{float: "left"}}>
                        <Card.Title style={{color: "#F27405"}}><h2>GigStr</h2></Card.Title>
                        <Card.Text style={{color: "white"}}> © 2022 GigStr </Card.Text>
                    </Nav.Item>
                </Nav>
                <Nav className="justify-content-center" variant="pills" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link aria-label="Act-citing" onClick={()=> navigate("/home")}>ActCiting</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link aria-label="Act-sent" onClick= {()=> window.open( 'https://actsent.school-of-tech-7.com/')}>ActSent</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link aria-label="Act-cept" onClick={()=> window.open('https://actcept.school-of-tech-7.com/')}>ActCept</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Body>
        </Card>
    ) 
}

export default Footer;