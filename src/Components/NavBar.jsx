
import "./NavBar.css";
import { Navbar } from "react-bootstrap";
import "./SearchBar.jsx";


const NavBar = () => {

  return (
    <Navbar className="navbar" fixed="top" variant="light" bg="primary">
      <div className="container-fluid">
        <Navbar.Brand>Chris' Music Collection</Navbar.Brand>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="black"
          className="bi bi-music-player-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm1 2h6a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm3 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
        </svg>
        
        
      </div>
    </Navbar>
  );
};

export default NavBar;
