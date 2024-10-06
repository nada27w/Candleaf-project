import { Link } from "react-router-dom";
import "./payments.css";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Inherit from "../../components/Inherit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Payments = () => {
  const prestonDetails = JSON.parse(
    localStorage.getItem("personDetails") || {}
  ) || {}

  return (
    <div className="d-flex  gap-3 p-4">
      <div className="d-flex flex-column w-50 align-items-center">
        <div className="border rounded-3 w-100">
          <div className="d-flex justify-content-between align-items-center">
            <p className="p-4">
              contact{" "}
              <span className="fw-bold">
                {prestonDetails.firstName} {prestonDetails.lastName},{" "}
                {prestonDetails.email}
              </span>
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="p-4">
              Ship to <span className="fw-bold">{prestonDetails.address}</span>
            </p>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className="p-4">
              Method <span className="fw-bold">shipping fees : 5$</span>
            </p>
          </div>
        </div>

        <div class="card border-secondary mb-3 w-75 p-3 m-2">
          <div
            class="card-header d-flex justify-content-between cardStyle align-items-center"
            style={{ backgroundColor: "#DDF0E6" }}
          >
            <h5 style={{ color: "darkgray" }}>Credit Card</h5>
            <FontAwesomeIcon
              color="#56B280"
              fontSize={20}
              icon={faCreditCard}
            />
          </div>
          <div class="card-body text-primary">
            <div className="d-flex justify-content-between position-relative flex-wrap">
              <input
                type="text"
                name="Credit"
                id="credit card"
                placeholder="Card Number"
                className="w-100 m-1 p-2 rounded-3 border border-success p-2 mb-2 border-opacity-25"
              />
              <FontAwesomeIcon
                color="#56B280"
                fontSize={10}
                icon={faLock}
                style={{ position: "absolute", right: 8, top: 20 }}
              />
              <input
                type="text"
                name="Credit"
                id="credit card"
                placeholder="Name On Card"
                className="w-100 m-1 p-2 rounded-3 border border-success p-2 mb-2 border-opacity-25"
              />
            </div>
            <div className="d-flex justify-content-between">
              <input
                type="text"
                name="expiry"
                id="expiry"
                placeholder="Expiry Date"
                className="w-50 m-1 p-2 rounded-3 border border-success p-2 mb-2 border-opacity-25"
              />
              <input
                type="text"
                name="cvc"
                id="cvc"
                placeholder="CVC"
                className="w-50 m-1 p-2 border border-success p-2 mb-2 border-opacity-25"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="m-2">Billing Address</h2>
          <div className="m-2">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Same as the shipping address
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Use a different address for billing
              </label>
            </div>
          </div>

        </div>
          <Link to="/confirm" className="btn btn-success ">
            Pay Now
          </Link>
      </div>

      <Inherit />
    </div>
  );
};

export default Payments;
