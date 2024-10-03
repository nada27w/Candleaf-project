import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      {/* <h1>Welcome to the Home Page</h1> */}

      <div className="imageContainer">
        {/* <img className="imageONE" src="src/images/image1.jpeg" alt="not found" /> */}
        <div className="section-one rounded border">
          <h1>
            🌱 <br />
            The nature candle
          </h1>
          <p>
            All handmade with natural soy wax, Candleaf is a companion for all
            your pleasure moments{" "}
          </p>
          <button type="button" class="btn btn-success" data-bs-toggle="button">
            <Link to="/products" className="text-white text-decoration-none ">
              Discovery our collection
            </Link>
          </button>
        </div>
      </div>



    {/*sectionTWO DIV */}
    <div>

        <div className="secTwo-div1">
          <h1>Products</h1>
          <p>Order it for you or for your beloved ones </p>
          <hr />
        </div>
        {/*the first 4 cards */}
        <div className="cards">
          <Link className="text-decoration-none text-black item-card">
            <img
              // className="small_IMAGES"
              width={100}
              height={100}
              src="src/images/image1.jpeg"
              alt="not found"
            />
            <div className="p-2 bg-success">
              <h5 className="text-start">Spiced Mint</h5>
              <p class="text-end">9.99$</p>
            </div>
          </Link>
          <Link className="text-decoration-none text-black item-card">
            <img
              // className="small_IMAGES"
              width={100}
              height={100}
              src="src/images/image1.jpeg"
              alt="not found"
            />
            <div className="p-2 bg-success">
              <h5 className="text-start">Spiced Mint</h5>
              <p class="text-end">9.99$</p>
            </div>
          </Link>
          <Link className="text-decoration-none text-black item-card">
            <img
              // className="small_IMAGES"
              width={100}
              height={100}
              src="src/images/image1.jpeg"
              alt="not found"
            />
            <div className="p-2 bg-success">
              <h5 className="text-start">Spiced Mint</h5>
              <p class="text-end">9.99$</p>
            </div>
          </Link>
          <Link className="text-decoration-none text-black item-card">
            <img
              // className="small_IMAGES"
              width={100}
              height={100}
              src="src/images/image1.jpeg"
              alt="not found"
            />
            <div className="p-2 bg-success">
              <h5 className="text-start">Spiced Mint</h5>
              <p class="text-end">9.99$</p>
            </div>
          </Link>
        </div>
        {/*the second 4 cards */}
        <div className="cards">
          <Link className="text-decoration-none text-black item-card">
            <img
              // className="small_IMAGES"
              width={100}
              height={100}
              src="src/images/image1.jpeg"
              alt="not found"
            />
            <div className="p-2 bg-success">
              <h5 className="text-start">Spiced Mint</h5>
              <p class="text-end">9.99$</p>
            </div>
          </Link>
          <Link className="text-decoration-none text-black item-card">
            <img
              // className="small_IMAGES"
              width={100}
              height={100}
              src="src/images/image1.jpeg"
              alt="not found"
            />
            <div className="p-2 bg-success">
              <h5 className="text-start">Spiced Mint</h5>
              <p class="text-end">9.99$</p>
            </div>
          </Link>
          <Link className="text-decoration-none text-black item-card">
            <img
              // className="small_IMAGES"
              width={100}
              height={100}
              src="src/images/image1.jpeg"
              alt="not found"
            />
            <div className="p-2 bg-success">
              <h5 className="text-start">Spiced Mint</h5>
              <p class="text-end">9.99$</p>
            </div>
          </Link>
          <Link className="text-decoration-none text-black item-card">
            <img
              // className="small_IMAGES"
              width={100}
              height={100}
              src="src/images/image1.jpeg"
              alt="not found"
            />
            <div className="p-2 bg-success">
              <h5 className="text-start">Spiced Mint</h5>
              <p class="text-end">9.99$</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default HomePage;
