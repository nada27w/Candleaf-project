const Footer = () => (
  <>
    <div className="bg-dark d-flex justify-content-around align-items-center footDiv">
      <div className="logofNav">
        <img
          width={33.6}
          height={33.6}
          src="/src/images/leaficon.png"
          alt="icon"
        />
        <img
          width={85.25}
          height={14.61}
          src="/src/images/wordmark.png"
          alt="this is watermark"
        />
      </div>
      <div className="discDiv">
        <ul className="text-white lh-lg">
          <li>Discovery</li>
          <li>New Season</li>
          <li>Most selled</li>
          <li>Most Searched</li>
        </ul>
      </div>
      <div className="aboutDiv">
        <ul className="text-white lh-lg">
          <li>About</li>
          <li>Help</li>
          <li>Shipping</li>
          <li>Affiliate</li>
        </ul>
      </div>

      <div className="infoDiv">
        <ul className="text-white lh-lg">
          <li>Info</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
    </div>
  </>
);

export default Footer;
