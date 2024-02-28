import React from "react";
import { Button } from "reactstrap";
import { BsTelephoneInbound } from "react-icons/bs";

const PhoneButton = ({ phoneNumber }) => {
  return (
    <Button
      target="_blank"
      href={`tel:${phoneNumber}`}
      color="danger"
      className="btn btn-outline-white mt-2 mr-2 font-weight-bold"
    >
      <BsTelephoneInbound className="mr-3" />
      Nazovi nas
    </Button>
  );
};
export default PhoneButton;
