import { Link } from "react-router-dom";
import "./index.scss";
export const Navigation = () => {
  return (
    <div className="nav">
      <nav className="nav--bar">
        <div className="nav--name">
          <Link href="/">SOLAR SAFARI</Link>
        </div>
        <div className="nav--link">
          <ul>
            <li>
              <Link aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/discover">Discover</Link>
            </li>
            <li>
              <Link to="/travel">Book Ride</Link>
            </li>
            <li>
              <Link to="/about">AboutUs</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
