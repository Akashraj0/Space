import { Link } from "react-router-dom";
import { useState } from "react";
import "./index.scss";
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false); // Changed initial state to false

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="navbar">
        <div className="nav--Logo">
          <Link style={{ textDecoration: "none", color: "white" }} href="/">
            SOLAR SAFARI
          </Link>
        </div>
        <div className={`nav--link ${isOpen ? "opened" : "closed"}`}>
          <Link className="Link" aria-current="page" to="/">
            Home
          </Link>
          <Link className="Link" to="/discover">
            Discover
          </Link>
          <Link className="Link" to="/travel">
            Book Ride
          </Link>
          <Link className="Link" to="/about">
            AboutUs
          </Link>
        </div>
      </div>
      <div className={`${isOpen ? "sidebar" : "hambu"}`}>
        <div className="nav--Logo">
          <Link style={{ display: "none" }} className="Link" href="/">
            SOLAR SAFARI
          </Link>
        </div>
        <div className={`nav--link `}>
          <Link className="Link" aria-current="page" to="/">
            Home
          </Link>
          <Link className="Link" to="/discover">
            Discover
          </Link>
          <Link className="Link" to="/travel">
            Book Ride
          </Link>
          <Link className="Link" to="/about">
            AboutUs
          </Link>
        </div>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
      </div>
    </>
  );
};
