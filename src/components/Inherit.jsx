const InheritPage = () => {
  const submittedItems = JSON.parse(localStorage.getItem("order") || []);
  
  const subTotal = submittedItems.reduce(// reduce  function used to accumulate array elements into a single value
    (acc, item) => acc + item.qty * item.priceNum,// this fun return the total of th quantity *price number 
    //calculates the total of the quantity multiplied by the price number for each item in
    //
    0
  ).toFixed(2)

  return (
    <>
      <div className="w-50   p-5" style={{ backgroundColor: "#56B28033" }}>
        {submittedItems.map((product) => {
          return (
            <div className="w-100 d-flex flex-wrap  mt-2" key={product.productId}>
              <img src={product.imageLink} alt="not defined" width={200 } className="bg-white" />
              <div className="d-flex flex-column gap-3 w-50 px-3">
              <h2 className="d-flex">{product.productName}</h2>
              < p className="d-flex justify-content-column w-100 "> price: {product.priceNum}$ <span className="text-danger px-5">Quantity: {product.qty}</span></p>
              </div>
            </div>
          );
        })}
        <hr />
        <div>
          <input
            className="form-control w-50 "
            type="text"
            placeholder="Coupon code"
            aria-label="default input example"
          />

          <button type="submit" className="btn btn-success mb-3 d-flex mt-2">
            Add Code
          </button>
          <hr />
        </div>
        <div>
          <span className="d-flex justify-content-between">
        <p className="px-2 ">Subtotal: </p>
            <p className="px-3 fw-bold"> {subTotal}$</p>
          </span>

          <br />

          <span className="d-flex justify-content-between">
            <p className="px-2">Shipping</p>
            <p className="px-3">5$ </p>
          </span>
          <hr />

          <span className="d-flex justify-content-between">
            <p className="px-2">Total</p>
            <p className="px-3 fw-bold"> {+subTotal+5}$</p>
          </span>
        </div>
      </div>
    </>
  );
};
export default InheritPage;
