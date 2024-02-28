import React from "react";
import {
    Button
} from "reactstrap";
import { BsWhatsapp } from "react-icons/bs";


const WhatsappButton = ({phoneNumber}) => {
    return  <Button target="_blank" href={`https://wa.me/${phoneNumber}`} style={{backgroundColor:"#25D366"}} className="btn  font-weight-bold mt-2 mr-2"><BsWhatsapp className="mr-2"/>
    Whatsapp</Button>
}
export default WhatsappButton;