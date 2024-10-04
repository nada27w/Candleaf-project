//import hook
import { useSearchParams } from "react-router-dom";

const Product = () => {
  //use the hook
  const [searchParams] = useSearchParams();

  const imageLink = searchParams.get("imageLink");
  const productName = searchParams.get("productName");
  const priceNum = searchParams.get("priceNum");

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center align-items-center flex-column w-50">
          <img src={imageLink} alt="none" />
          <p className="text-center fw-bold">
            All hand-made with natural soy wax, Candleaf is <br /> made for your
            pleasure moments
          </p>
          <p className="text-success">🚚 FREE SHIPPING</p>
        </div>

        <div className="d-flex flex-column w-50 gap-5">
          <div>
            <h4 className="fs-2">{productName}</h4>
            <p className="text-success">{priceNum}$</p>
            <div className="pb-5">
            <p className="fw-bold">Quantity:</p>
            <input type="number" />
          </div>
            <button  type="button" class="btn btn-success">
              + Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
