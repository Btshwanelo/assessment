import React from "react";
import "../css/main.css";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <SideBar open={open} handleOpen={handleOpen} />
      <div class="w3-top">
        <div class={`w3-bar w3-white w3-card  }`} id="myNavbar">
          <a href="/" class="w3-bar-item w3-button w3-wide">
            LOGO
          </a>
          <div class="w3-right w3-hide-small">
            <a href="/work" class="w3-bar-item w3-button">
              <i class="fa fa-th"></i> WORK
            </a>
            <a href="/" class="w3-bar-item w3-button">
              <i class="fa fa-envelope"></i> CONTACT
            </a>
          </div>

          <a
            class="w3-bar-item w3-button w3-right w3-hide-large w3-hide-medium"
            onClick={handleOpen}
          >
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
