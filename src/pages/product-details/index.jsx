import { useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { products } from "./constants";

const Product = () => {
  const [searchParams] = useSearchParams();
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  const imageLink = searchParams.get("imageLink");
  const productName = searchParams.get("productName");
  const priceNum = searchParams.get("priceNum");
  const productId = searchParams.get("id");

  const handleQty = (event) => {
    if (event.target.value > 0) {
      setQty(event.target.value);
    }
  };

  const addItem = () => {
    const itemsStorage = localStorage.getItem("cartItems");

    if (itemsStorage) {
      const prevCartItems = JSON.parse(itemsStorage);

      const foundItemIndex = prevCartItems.findIndex(
        (product) => product.productId === productId
      );

      if (foundItemIndex !== -1) {
        prevCartItems[foundItemIndex].qty =
          +prevCartItems[foundItemIndex].qty + +qty;

        localStorage.setItem("cartItems", JSON.stringify(prevCartItems));
      } else {
        const cartItemsValue = [
          ...prevCartItems,
          {
            productId,
            imageLink,
            productName,
            priceNum,
            qty,
          },
        ];

        localStorage.setItem("cartItems", JSON.stringify(cartItemsValue));
      }
    } else {
      const cartItemsValue = [
        {
          productId,
          imageLink,
          productName,
          priceNum,
          qty,
        },
      ];

      localStorage.setItem("cartItems", JSON.stringify(cartItemsValue));
    }

    navigate("/cart");
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center align-items-center flex-column w-50 p-5 ">
          <img className="bg-body-secondary " src={imageLink} alt="none" />
          <p className="text-center fw-bold">
            All hand-made with natural soy wax, Candleaf is <br /> made for your
            pleasure moments
          </p>
          <p className="text-success">🚚 FREE SHIPPING</p>
        </div>

        <div className="d-flex flex-column w-50 gap-5 ">
          <div className="border d-flex flex-column justify-content-center align-items-center p-3 rounded">
            <h4 className="fs-2">{productName}</h4>
            <p className="text-success">{priceNum}$</p>
            <div className="pb-5">
              <p className="fw-bold">Quantity:</p>
              <input
                type="number"
                className="px-2 py-1 border rounded border-success"
                onChange={handleQty}
                value={qty}
              />
            </div>
            <button type="button" class="btn btn-success" onClick={addItem}>
              + Add to cart
            </button>
            <Link to="/" type="button" className="btn btn-secondary mt-2">
              « Back To Home
            </Link>
          </div>
        </div>

        <div className="border w-5 m-5 rounded">
          {products
            .filter(({ id }) => id == productId)
            .map((chosenItem) => {
              return (
                <div
                  key={chosenItem.id}
                  className="d-flex inline-block justify-content-space-between p-5 flex-wrap gap-4"
                >
                  {chosenItem.attributes.map((attribute, index) => (
                    <div key={index} className="w-100">
                      <span className="fw-bold">{attribute.key}:</span>{" "}
                      {attribute.value}
                    </div>
                  ))}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default Product;
