import { Link } from "react-router-dom";
import "./styleicon.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <nav className="bg-white shadow-sm p-3 bg-body-tertiary rounded  w-10 w-md-5">
      <div className="d-flex justify-content-around align-items-center navDiv">
        <div className="logofNav">
          <img
            width={33.6}
            height={33.6}
            src="/src/images/leaficon.png"
            alt="icon"
          />
          <img
            width={85.25}
            height={14.61}
            src="/src/images/wordmark.png"
            alt="this is watermark"
          />
        </div>
        <div className="linkNav ">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="logosNav">
          <Link to="/profile">
            <Link to="/cart">
              <FontAwesomeIcon
                color="#56B280"
                fontSize={30}
                icon={faCartShopping}
              />
            </Link>
          </Link>

          <Link to="/profile">
            <FontAwesomeIcon color="#56B280" fontSize={30} icon={faUser} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
