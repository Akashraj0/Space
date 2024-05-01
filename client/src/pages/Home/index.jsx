import { useNavigate } from "react-router-dom";
import "./index.scss";
const Home = () => {
  const navigate = useNavigate();
  const handlebuttonClick = () => {
    navigate("/Travel");
  };
  const handlebuttonClick1 = () => {
    navigate("/Discover");
  };
  return (
    <div className="home">
      <div className="home--content">
        <h2>Are you – Someone who still holds the flat-earth theory?</h2>
        <h2>Someone who believes in the matrix?</h2>
        <h2>Someone who’s baffled by the theory of relativity? </h2>
        <h5>
          Well, you have arrived at the right place. We all wish to be out there
          in the infinite, right? It’s high time that we take you there. Hop on
          for a thrilling ride through the jungle of space.
        </h5>
        <div className="home--btn">
          <button className="btn" onClick={handlebuttonClick}>
            Book a Ride
          </button>
          <button className="btn" onClick={handlebuttonClick1}>
            Discover
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
