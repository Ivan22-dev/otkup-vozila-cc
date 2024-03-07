import React from "react";
import { useState } from "react";
import { Button } from "reactstrap";
import { Tooltip } from "reactstrap";
import { BsChatDots } from "react-icons/bs";
const ViberButton = ({ phoneNumber }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <>
      <Button
        id="viber-btn"
        onClick={() => {}}
        href={`viber://contact?number=%2B${phoneNumber}`}
        className="viber font-weight-bold mt-2 mr-2"
      >
        <BsChatDots className="mr-2" />
        Viber
      </Button>
      {/* {
        <Tooltip
          style={{ backgroundColor: "#CED4DA", color: "#000" }}
          isOpen={tooltipOpen}
          target="viber-btn"
          toggle={toggle}
        >
          Ako ste na računalu, javite nam se putem vibera na +385 91 501 6957
        </Tooltip>
      } */}
    </>
  );
};
export default ViberButton;
