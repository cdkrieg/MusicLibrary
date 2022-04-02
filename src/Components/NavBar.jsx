import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Chris' Music Collection
        </a>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="rgb(66, 66, 223)" className="bi bi-music-player-fill" viewBox="0 0 16 16">
  <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm1 2h6a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm3 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
</svg>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#">
                  Artist
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Title
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Album
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Genre
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Release Date
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
