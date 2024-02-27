import React from "react";
import { Button } from "reactstrap";

const PhoneButton = ({ phoneNumber }) => {
  return (
    <Button
      target="_blank"
      href={`tel:${phoneNumber}`}
      color="warning"
      className="btn btn-outline-white mt-2 mr-3"
    >{`📞 Nazovi nas`}</Button>
  );
};
export default PhoneButton;
