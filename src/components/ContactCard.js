import React from "react";
import './App.css';
import user from "../images/contact-icon-png-6.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ContactCard = (props) => { 
    
        const { id, name, email } = props.contact;

    return(
        <div className="container">
            
              
        <div className="row align-item-center">
          <div className="col">
        <img src={user} className="rounded-circle" height="20px"/>
        </div>

        
           
            <div className="col">{name}</div>
            <div className="col">{email}</div>
        
        <div className="col">
        <FontAwesomeIcon icon={faTrashCan} 
        style={{color:"red",marginTop:"7px"}}
        onClick={() => props.clickHander(id)}
        />
        
        </div>
        
    </div>
    </div>
    );
};
export default ContactCard;
