//import hook
import { useState } from "react";
import { Link, useSearchParams ,useNavigate } from "react-router-dom";
import { products } from "./constants";


const Product = () => {
  //use the hook
  const [searchParams] = useSearchParams();
  const [qty, setQty] = useState(1);
  const navigate=useNavigate()

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
    //get the items from the localStorage
    const itemsStorage = localStorage.getItem("cartItems");

    //if found an existing localStorage
    if (itemsStorage) {
      //get the data from the localStorage
      const prevCartItems = JSON.parse(itemsStorage); //parsed from a JSON string to a JavaScript object using 1

      //found the same product in the localStorage
      const foundItemIndex = prevCartItems.findIndex(
        (product) => product.productId === productId // findIndex to locate the product in the array that matches the productId.2
        // 3shan el product lama a3mlo add may7slsh tkrar leh wa na hadef element wahed bas
      );

      // console.log(foundItemIndex)

      if (foundItemIndex !== -1) {
        //If the product is found (foundItemIndex !== -1), the quantity is updated by adding the new quantity to the existing one.3
        //add the input qty to the existing product
        prevCartItems[foundItemIndex].qty =
          +prevCartItems[foundItemIndex].qty + +qty;
        //push the result to the localStorage
        localStorage.setItem("cartItems", JSON.stringify(prevCartItems));
      } else {
        //make the new array for the localStorage
        const cartItemsValue = [
          //If the product is not found, a new array is created that includes the new product along with the existing ones 4
          ...prevCartItems,
          {
            productId,
            imageLink,
            productName,
            priceNum,
            qty,
          },
        ];
        //push the result to the localStorage
        localStorage.setItem("cartItems", JSON.stringify(cartItemsValue)); //The updated array is converted back to a JSON string using JSON.stringify and stored in localStorage. 5
      }
    } else {
      //create a new value to the localStorage
      const cartItemsValue = [
        //If no items are found in localStorage, a new array is created with the new product and stored in localStorage.6
        {
          productId,
          imageLink,
          productName,
          priceNum,
          qty,
        },
      ];
      //push the result to the localStorage
      localStorage.setItem("cartItems", JSON.stringify(cartItemsValue));
    } //JSON.stringify-->
    //JSON is an object in javascript has two functions in it
    //stringify >> convert the whatever data you put in it to string
    //parse >> convert any data from string to the correct type in javascript(array, object, boolean, function)

    navigate("/cart")
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
            .filter(({ id }) => id == productId) // filter fun{id}  to find specific id to each obj
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
