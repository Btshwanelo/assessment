import React from "react";

function SideBar({ open, handleOpen }) {
  console.log(open);

  return (
    <nav
      class={`w3-sidebar w3-bar-block w3-black w3-card w3-animate-left w3-hide-medium w3-hide-large ${
        open ? "show" : "hide"
      }`}
      id="mySidebar"
    >
      <a
        href="javascript:void(0)"
        onclick={handleOpen}
        class="w3-bar-item w3-button w3-large w3-padding-16"
      >
        Close ×
      </a>
      <a href="#about" onclick={handleOpen} class="w3-bar-item w3-button">
        ABOUT
      </a>
      <a href="#team" onclick={handleOpen} class="w3-bar-item w3-button">
        TEAM
      </a>
      <a href="#work" onclick={handleOpen} class="w3-bar-item w3-button">
        WORK
      </a>
      <a href="#pricing" onclick={handleOpen} class="w3-bar-item w3-button">
        PRICING
      </a>
      <a href="#contact" onclick={handleOpen} class="w3-bar-item w3-button">
        CONTACT
      </a>
    </nav>
  );
}

export default SideBar;
