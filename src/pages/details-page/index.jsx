import InheritPage from "../../components/inherit";

const DetailsPage = () => {
  return (
    <>
      <div className="d-flex p-5 gap-5 ">
        <div className="w-50">
          <div className=" d-flex justify-content-between ">
            <h1 className="fs-2">Contact</h1>
            <p className="p-2">
              Do you have an account?{" "}
              <span className=" fw-bold text-success">Login</span>{" "}
            </p>
          </div>

          <div className="d-flex justify-content-evenly flex-column gap-3 w-4 py-2 ">
            <input
              class="form-control"
              type="text"
              placeholder="Email or mobile phone number"
              aria-label="default input example"
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
              />
              <input
                className="form-control w-50"
                type="text"
                placeholder="Second Name"
                aria-label="default input example"
              />
            </div>
            <input
              className="form-control w-100"
              type="text"
              placeholder="Address and number"
              aria-label="default input example"
            />
            <input
              className="form-control w-100"
              type="text"
              placeholder="Shipping note (optional)"
              aria-label="default input example"
            />

            <div className="d-flex gap-2 w-100 ">
              <input
                className="form-control w-50"
                type="text"
                placeholder="City"
                aria-label="default input example"
              />
              <input
                className="form-control w-50"
                type="text"
                placeholder="Postal Code"
                aria-label="default input example"
              />
              <input
                className="form-control w-50"
                type="text"
                placeholder="Phone Number"
                aria-label="default input example"
              />
            </div>

            <div className="d-flex gap-2 w-100 ">
              <select
                className="form-select w-100"
                aria-label="Default select example"
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
            <button type="button" className=" btn btn-success">
              Back to Cart
            </button>
            <button type="button" class="btn btn-success">
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
