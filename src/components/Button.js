import React from "react";
import BootstrapButton from 'react-bootstrap/Button'
import { useNavigate } from "react-router-dom";

const Button = (props) => {

    const navigate = useNavigate();

    return(
        <div>
            <BootstrapButton className="submit-button" data-testid="customButton" onClick={()=> navigate(props.path)} >{props.title}</BootstrapButton>
        </div>
    )
}

export default Button;