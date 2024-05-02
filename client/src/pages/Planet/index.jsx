// import { Carousel } from "bootstrap";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PlanetDetails from "../PlanetDetails";
import TimeLine from "../TimeLine";
import axios from "axios";
// import PlanetDetails from "../PlanetDetails";
// import Timeline from "../TimeLine";

export const Planet = () => {
  const location = useLocation();
  const [data, setData] = useState(null);
  const { name } = location.state || {};

  useEffect(() => {
    console.log(name);
    const fetch = async () => {
      const result = await axios.post(
        `https://space-t99y.onrender.com/planet/${name}`
      );
      setData(result?.data[0]);
      console.log(data);
    };
    fetch();
  }, []);
  const navStyle = {
    backgroundColor: "#081223",
    color: "white",
    padding: "10px",
  };

  const ulStyle = {
    listStyle: "none",
    padding: "0",
    display: "flex",
    justifyContent: "space-around",
  };

  const liStyle = {
    margin: "0 10px",
    transition: "color 0.3s", // Add a smooth transition for color change
  };
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  const [showPlanetDetails, setShowPlanetDetails] = useState(false);
  const [showTimeline, setShowTimeline] = useState(true);

  const handleAboutClick = () => {
    if (!showPlanetDetails) {
      setShowPlanetDetails(true);
      setShowTimeline(false);
    }
  };

  const handleHistoryClick = () => {
    if (!showTimeline) {
      setShowTimeline(true);
      setShowPlanetDetails(false);
    }
  };

  return (
    <div style={{ height: "100%" }}>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link
              style={linkStyle}
              className="nav-link"
              onClick={handleAboutClick}
            >
              About
            </Link>
          </li>
          <li style={liStyle}>
            <Link
              style={linkStyle}
              onClick={handleHistoryClick}
              className="nav-link"
            >
              History Overview
            </Link>
          </li>
        </ul>
      </nav>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {showPlanetDetails && (
          <PlanetDetails des={data?.description} ved={data?.vedio} />
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "left",
          textAlign: "left",
          alignItems: "left",
        }}
      >
        {showTimeline && <TimeLine time={data?.content} />}
      </div>
    </div>
  );
};
export default Planet;
