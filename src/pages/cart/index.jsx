import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./cartstyle.css";

const Cart = () => {
  const CartState = localStorage.getItem("cartItems");
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  const handleQty = (id)=> (event) => {
    if (event.target.value > 0) {
      const updatedCart = cartItems.map((item) =>
        +item.productId === +id ? {...item, qty: parseInt(event.target.value) } : item
      );

      setCartItems(updatedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    }
  };

  const handleCheckout = ()=>{
    localStorage.removeItem("cartItems")
    localStorage.setItem("order", JSON.stringify(cartItems))
<<<<<<< HEAD
    navigate("/address-page")
=======
    navigate("/details-page")
>>>>>>> b4197f0 (payment page)
  }

  useEffect(() => {
    if (CartState) {
      setCartItems(JSON.parse(CartState));
    }
  }, []);

  const handleDelete = (id) => {
    const newArr = cartItems.filter(({ productId }) => productId !== id);
    setCartItems(newArr);
    localStorage.setItem("cartItems", JSON.stringify(newArr));
  };

  return (
    <>
      <div className="container-fluid text-center">
        <div className="col justify-content-md-center">
          <div className="row">
            <h2>Your cart items</h2>
            <Link
              className="text-decoration-none text-black fw-bold backDiv"
              to="/"
            >
              Back to shopping
            </Link>
          </div>
          <div className="px-5">
            <div className="container text-start">
              <div className="row justify-content-md-center border-bottom border-black d-flex">
                <div className="col productDiv">Product</div>
                <div className="col-md-auto priceDiv">Price</div>
                <div className="col col-lg-2 quantityDiv">Quantity</div>
                <div className="col-md-auto totalDiv">Total</div>
              </div>
              {cartItems.map((item, index) => (
                <div
                  className="row border-bottom border-black justify-content-center d-flex"
                  key={item.id}
                >
                  <div className="col d-flex align-items-center">
                    {item.productName}
                    <img
                      src={item.imageLink}
                      alt={item.productName}
                      className="w-25 m-3"
                    />
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => handleDelete(item.productId)}
                    >
                      Delete
                    </button>
                  </div>
                  <div className="col-md-auto d-flex align-items-center justify-content-center">
                    {item.priceNum}
                  </div>
                  <div className="col col-lg-2 d-flex align-items-center justify-content-center">
                    <input
                      type="number"
                      className="px-2 py-1 border rounded"
                      onChange={handleQty(item.productId)}
                      value={item.qty}
                      style={{
                        width: "90px"
                      }}
                    />
                  </div>
                  <div className="col-md-auto d-flex align-items-center justify-content-center">
                    {+item.qty * +item.priceNum}
                  </div>
                </div>
              ))}
              <div className="row justify-content-end mt-3">
                <div className="col-md-auto">
                  <h4>
                    Subtotal:{" "}
                    {cartItems.reduce(
                      (acc, item) => acc + item.qty * item.priceNum,
                      0
                    ).toFixed(2)}
                  </h4>
                </div>
              </div>
              <div className="row justify-content-end mt-3">
                <div className="col-md-auto">
                  <button className="checkButton" onClick={handleCheckout}>Checkout</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
