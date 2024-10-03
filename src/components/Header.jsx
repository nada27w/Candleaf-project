import { Link } from "react-router-dom";
import "/src/components/styleicon.css"

const Header = ()=>{
    return(
      
        <nav className="bg-white shadow-sm p-3 mb-5 bg-body-tertiary rounded  w-10 w-md-5">
            <div className="d-flex justify-content-around align-items-center navDiv">
                <div className="logofNav">
                    <img width={33.6} height={33.6}  src="/src/images/leaficon.png" alt="icon"/>
                    <img width={85.25} height={14.61} src="/src/images/wordmark.png" alt="this is watermark" />
                </div>
                <div className="linkNav ">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="logosNav">
                    <img width={25.5} height={25.5} src="/src/images/vector.png" alt="profile" />
                    <img width={26} height={26} src="/src/images/cart.png" alt="cart" />
                </div>

          











            </div>
   


          
        </nav>
    )
}

export default Header;