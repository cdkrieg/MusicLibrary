import React, { useState } from "react";
import "./NavBar.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import "./SearchBar.jsx";

const NavBar = () => {
  const [selectValue, setSelectValue] = useState("");
  const handleSelect = (e) => {
    setSelectValue(e);
    console.log(e);
    return selectValue;
  };

  return (
    <Navbar className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Navbar.Brand>Chris' Music Collection</Navbar.Brand>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="rgb(66, 66, 223)"
          className="bi bi-music-player-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm1 2h6a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm3 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
        <DropdownButton
          id="navbarDropdown"
          role="button"
          onSelect={handleSelect}
          title="Search Category"
        >
          <Dropdown.Item
            className="dropdown-item"
            eventKey="artist"
            onSelect={handleSelect}
          >
            Artist
          </Dropdown.Item>
          <Dropdown.Item className="dropdown-item" eventKey="title">
            Title
          </Dropdown.Item>

          <Dropdown.Item className="dropdown-item" eventKey="album">
            Album
          </Dropdown.Item>

          <Dropdown.Item className="dropdown-item" eventKey="genre">
            Genre
          </Dropdown.Item>

          <Dropdown.Item className="dropdown-item" eventKey="releaseDate">
            Release Date
          </Dropdown.Item>
        </DropdownButton>
      </div>
    </Navbar>
  );
};

export default NavBar;
