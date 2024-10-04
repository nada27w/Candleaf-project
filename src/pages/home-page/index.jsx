import { Link } from "react-router-dom";
import "./HomePage.css";
import { portfolioItems, productItems, productItems2 } from "./constants";

const HomePage = () => {
  return (
    <>
      {/* section-ONE DIV */}
      <div className="imageContainer d-flex align-items-center justify-content-center flex-column">
        <div className="section-one rounded border w-35 text-center">
          <h1>
            🌱 <br />
            The nature candle
          </h1>
          <p>
            All handmade with natural soy wax, Candleaf is a companion for all
            your pleasure moments{" "}
          </p>
          <button
            type="button"
            className="btn btn-success"
            data-bs-toggle="button"
          >
            <Link to="/products" className="text-white text-decoration-none ">
              Discovery our collection
            </Link>
          </button>
        </div>
      </div>

      {/*section-TWO DIV */}
      <div>
        <div className="gap-2 d-flex text-uppercase align-items-center justify-content-center flex-column p-5">
          <h1>Products</h1>
          <p>Order it for you or for your beloved ones </p>
          <hr />
        </div>
        {/*the first 4 cards */}
        <div className="gap-5 d-flex justify-content-center">
          {productItems.map(({ imageLink, productName, priceNum, id }, index) => {
            return (
              <Link
                className="text-decoration-none text-black item-card d-flex justify-content-center flex-column align-items-center border rounded"
                key={index}
                to={`/product?${new URLSearchParams({
                  imageLink,
                  productName,
                  priceNum,
                  id
                }).toString()}`}
              >
                <img
                  width={100}
                  height={150}
                  src={imageLink}
                  alt="not found"
                  className="w-100 rounded-top bg-body-tertiary"
                />
                <div className="p-2 bg-success w-100 rounded-bottom">
                  <h5 className="text-start">{productName}</h5>
                  <p className="text-end">{priceNum}$</p>
                </div>
              </Link>
            );
          })}
        </div>
        {/*the second 4 cards */}
        <div className="gap-5 py-5 d-flex justify-content-center">
          {productItems2.map(({ imageLink, productName, priceNum, id }, index) => {
            return (
              <Link
                className="text-decoration-none text-black item-card d-flex justify-content-center flex-column align-items-center "
                key={index}
                to={`/product?${new URLSearchParams({
                  imageLink,
                  productName,
                  priceNum,
                  id
                }).toString()}`}
              >
                <img
                  width={100}
                  height={150}
                  src={imageLink}
                  alt="not found"
                  className="w-100 rounded-top bg-body-tertiary"
                />
                <div className="p-2 bg-success w-100 border rounded-bottom">
                  <h5 className="text-start">{productName}</h5>
                  <p className="text-end">{priceNum}$</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/*section-three DIV */}
      <div className="d-flex gap-5">
        <div className="w-50">
          <img className="w-100" src="src/images/candle.png" alt="not found" />
        </div>

        <div className="d-flex flex-column justify-content-center">
          <h1>
            Clean and <br />
            fragrant soy wax
          </h1>
          <p className="text-success fw-medium">
            {" "}
            Made for your home and for your wellness
          </p>
          <br />
          <ul>
            <li>
              <p>
                <span className="fw-bold">Eco-sustainable:</span>All recyclable
                materials, 0% CO2 emissions
              </p>
            </li>

            <li>
              <p>
                <span className="fw-bold">Hypoallergenic:</span>100% natural,
                human friendly ingredients
              </p>
            </li>

            <li>
              {" "}
              <p>
                <span className="fw-bold">Handmade:</span> All candles are
                craftly made with love.
              </p>
            </li>

            <li>
              <p>
                <span className="fw-bold">Long burning:</span>No more waste.
                Created for last long.
              </p>
            </li>
          </ul>
          <button className="btn btn-success">Learn more</button>
        </div>
      </div>

      {/*section-FOUR DIV */}
      <div className="secFOUR-div1 p-5">
        <div>
          <h1 className="d-flex justify-content-center">Testimonials</h1>

          <p className="d-flex justify-content-center">
            Some quotes from our happy customers
          </p>
        </div>

        <div className="d-flex gap-5 justify-content-center py-4">
          {portfolioItems.map(
            ({ mainImage, starsImage, title, description }, index) => (
              <div
                className="w-25 d-flex flex-column justify-content-center align-items-center border border-success bg-white rounded px-5"
                key={index}
              >
                <img className="w-100 " src={mainImage} alt="not defied " />
                <img className="w-100" src={starsImage} alt="" />
                <p className="m-3 text-center fw-bold">
                  {title}
                  <span>
                    <h3 className="fw-light fs-6">{description}</h3>
                  </span>
                </p>
              </div>
            )
          )}
        </div>
      </div>

      <div>
        <div className="gap-2 d-flex text-uppercase align-items-center justify-content-center flex-column pt-5">
          <h1>Popular</h1>
          <p>Our top selling product that you may like</p>
          <hr />
        </div>
        {/*the first 4 cards */}
        <div className="gap-5 d-flex justify-content-center pb-5">
          {productItems.map(({ imageLink, productName, priceNum, id }, index) => {
            return (
              <Link
                className="text-decoration-none text-black item-card d-flex justify-content-center flex-column align-items-center border rounded"
                key={index}
                to={`/product?${new URLSearchParams({
                  imageLink,
                  productName,
                  priceNum,
                  id
                }).toString()}`}//one obj takes 3 keys 
              >
                <img
                  width={100}
                  height={150}
                  src={imageLink}
                  alt="not found"
                  className="w-100 rounded-top bg-body-tertiary"
                />
                <div className="p-2 bg-success w-100 rounded-bottom">
                  <h5 className="text-start">{productName}</h5>
                  <p className="text-end">{priceNum}$</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div></div>
    </>
  );
};
export default HomePage;
