import { useNavigate } from "react-router-dom";
import Jupiter from "/assets/planet_images/Jupiter.png";
import Mars from "/assets/planet_images/Mars.png";
import Mercury from "/assets/planet_images/Mercury.png";
import Moon from "/assets/planet_images/Moon.png";
import Neptun from "/assets/planet_images/Neptun.png";
import Saturn from "/assets/planet_images/Saturn.png";
import Sun from "/assets/planet_images/Sun.png";
import Uranus from "/assets/planet_images/Uranus.png";
import Venus from "/assets/planet_images/Venus.png";
import "./index.scss";
export const Discover = () => {
  const navigate = useNavigate();
  const data = [
    { name: "Jupiter", image: Jupiter },
    { name: "Mars", image: Mars },
    { name: "Saturn", image: Saturn },
    { name: "Venus", image: Venus },
    { name: "Mercury", image: Mercury },
    { name: "Moon", image: Moon },
    { name: "Neptun", image: Neptun },
    { name: "Sun", image: Sun },
    { name: "Uranus", image: Uranus },
  ];

  const handleClick = (name, image) => {
    navigate("/planet", { state: { name } });
  };
  return (
    <div className="Discover">
      <h1>Explore your Solar System</h1>
      <div className="Discover--Box">
        <div className="Discover--Planet">
          {data.map(({ name, image }) => (
            <div key={name}>
              <img
                className="rotate"
                width="40%"
                src={image}
                alt={name}
                onClick={() => {
                  handleClick(name);
                }}
              />
              <a
                style={{ textDecoration: "underline" }}
                onClick={() => {
                  handleClick(name);
                }}
              >
                {`Learn about ${name}`}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discover;
