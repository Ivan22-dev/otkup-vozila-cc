import React, { useEffect } from "react";
import { Button } from "reactstrap";
import { BsChatDots } from "react-icons/bs";
import qrCodeViber from "../../assets/images/qrCodeViber.png";
import { useState } from "react";
import { Tooltip } from "reactstrap";

const ViberButton = ({ phoneNumber }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  }
  return (
    <>
      <Button
        id="viber-btn"
        onClick={() => {}}
        target={isMobile() ? "" : `_blank`}
        href={isMobile() ? `viber://chat?number=+${phoneNumber}` : ``}
        style={{ backgroundColor: "#59267c" }}
        className="btn  font-weight-bold mt-2 mr-2"
      >
        <BsChatDots className="mr-2" />
        Viber
      </Button>
      {isMobile && (
        <Tooltip
          style={{ backgroundColor: "#ced4da", color: "#000" }}
          isOpen={tooltipOpen}
          target="viber-btn"
          toggle={toggle}
        >
          Skenirajte QR kod svojim mobitelom za početak razgovora na viberu
          <img src={qrCodeViber} width="100%" height="100%" />
        </Tooltip>
      )}
    </>
  );
};
export default ViberButton;
