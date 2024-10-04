
import { Link } from "react-router-dom";
const Cart = () => (
  <>
    {/* <div className="d-flex justify-content-center align-items-center flex-column"> */}
    <div className="container-fluid text-center">
      <div className="col justify-content-md-center">
        <div className="row">
          <h2>Your cart items</h2>
          <Link to="/">Back to shopping</Link>
        </div>
        <div className="px-5">
          <div class="container text-start ">
            <div class="row justify-content-md-center border-bottom border-black">
              <div class="col  productDiv">Product</div>
              <div class="col-md-auto priceDiv">Price</div>
              <div class="col col-lg-2 quantityDiv">Quantity</div>
              <div class="col-md-auto totalDiv">Total</div>
            </div>

            <div class="row border-bottom border-black">
              <div class="col">1 of 3</div>
              <div class="col-md-auto">Variable width content</div>
              <div class="col col-lg-2">3 of 3</div>
              <div class="col-md-auto totalDiv">Total</div>
                

            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Cart;
