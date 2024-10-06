import { useState } from "react";
import InheritPage from "../../components/inherit";
import { Link, useNavigate } from "react-router-dom";

const DetailsPage = () => {
  //js logic
  const [formValues, setFormValues] = useState({}); //initalization
  const navigate = useNavigate();

  const handleChange = (name) => (event) => {
    const inputValue = event.target.value;
    setFormValues({
      ...formValues,
      [name]: inputValue,
    });
  };

  const handleBackToCart = () => {
    const currentCartItems = localStorage.getItem("order");
    localStorage.setItem("cartItems", currentCartItems);
    localStorage.removeItem("order");
    navigate("/cart");
  };

  const handleGoToShipping = () => {
    localStorage.setItem("personDetails", JSON.stringify(formValues));
    navigate("/payment-page");
  };

  return (
    //jsx
    <>
      <div className="d-flex p-5 gap-5 ">
        <div className="w-50">
          <div className=" d-flex justify-content-between ">
            <h1 className="fs-2">Contact</h1>
            <p className="p-2">
              Do you have an account?{" "}
              <Link to="/profile" className=" fw-bold text-success">
                Login
              </Link>
            </p>
          </div>

          <div className="d-flex justify-content-evenly flex-column gap-3 w-4 py-2 ">
            <input
              class="form-control"
              type="text"
              placeholder="Email or mobile phone number"
              aria-label="default input example"
              value={formValues.email}
              onChange={handleChange("email")}
            />

            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" id="" />
                Add me to Candleaf newsletter for a 10% discount
              </label>
            </div>
          </div>

          {/* Shipping Address  */}
          <div className=" d-flex  gap-2 flex-wrap">
            <h1 className="fs-2">Shipping Address</h1>
            <div className="d-flex w-100 gap-2">
              <input
                className="form-control w-50"
                type="text"
                placeholder="Name"
                aria-label="default input example"
                value={formValues.firstName}
                onChange={handleChange("firstName")}
              />
              <input
                className="form-control w-50"
                type="text"
                placeholder="Second Name"
                aria-label="default input example"
                value={formValues.secondName}
                onChange={handleChange("secondName")}
              />
            </div>
            <input
              className="form-control w-100"
              type="text"
              placeholder="Address and number"
              aria-label="default input example"
              value={formValues.address}
              onChange={handleChange("address")}
            />
            <input
              className="form-control w-100"
              type="text"
              placeholder="Shipping note (optional)"
              aria-label="default input example"
              value={formValues.shipping}
              onChange={handleChange("shipping")}
            />

            <div className="d-flex gap-2 w-100 ">
              <input
                className="form-control w-50"
                type="text"
                placeholder="City"
                aria-label="default input example"
                value={formValues.city}
                onChange={handleChange("city")}
              />
              <input
                className="form-control w-50"
                type="text"
                placeholder="Postal Code"
                aria-label="default input example"
                value={formValues.postalCode}
                onChange={handleChange("postalCode")}
              />
              <input
                className="form-control w-50"
                type="text"
                placeholder="Phone Number"
                aria-label="default input example"
                value={formValues.phoneNumber}
                onChange={handleChange("phoneNumber")}
              />
            </div>

            <div className="d-flex gap-2 w-100 ">
              <select
                className="form-select w-100"
                aria-label="Default select example"
                value={formValues.country}
                onChange={handleChange("country")}
              >
                <option selected>Country/Region</option>
                <option value="1">Cairo</option>
                <option value="2">Italy</option>
                <option value="3">USA</option>
              </select>
            </div>

            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" id="" />
                Save this informations for a future fast checkout
              </label>
            </div>
          </div>

          <div className=" d-flex  gap-2 w-100 justify-content-between my-2">
            <button
              type="button"
              className=" btn btn-success"
              onClick={handleBackToCart}
            >
              Back to Cart
            </button>
            <button
              type="button"
              class="btn btn-success"
              onClick={handleGoToShipping}
            >
              Go to shipping
            </button>
          </div>
        </div>

        <InheritPage />
      </div>
    </>
  );
};
export default DetailsPage;
