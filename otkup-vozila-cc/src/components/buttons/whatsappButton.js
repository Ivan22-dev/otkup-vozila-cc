import React from "react";
import {
    Button
} from "reactstrap";

const WhatsappButton = ({phoneNumber}) => {
    return  <Button href={`https://wa.me/${phoneNumber}`} style={{backgroundColor:"#25D366"}} className="btn mt-2 mr-2">Whatsapp</Button>
}
export default WhatsappButton;