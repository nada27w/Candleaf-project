

const ContactUs = () => (
  <>
    <div className="d-flex flex-column justify-content-center align-items-center flex-wrap contactDiv">
      <h1>Contact Us</h1>

      <p>
        We’d love to hear from you! Whether you have a question about our
        products, need assistance, or just want to share your thoughts, we’re
        here to help.
      </p>
      <h3>Email Us</h3>
      <ul>
        <li>
          <h5>
            {" "}
            Customer Support:{" "}
            <a className="text-decoration-none text-black" href="mailto:support@candleaf.com">Support@candleaf.com</a>
          </h5>
        </li>
        <li>
          <h5>
            Sales Inquiries:{" "}
            <a className="text-decoration-none text-black" href="mailto:sales@candleaf.com">Sales@candleaf.com</a>
          </h5>
        </li>
        <li>
          <h5>
            {" "}
            General Information:
            <a className="text-decoration-none text-black" href="mailto:info@candleaf.com">Info@candleaf.com</a>
          </h5>
        </li>
      </ul>
      <h3>Call Us</h3>
      <ul>
        <li>
          <h5>1-800-Candleaf (1-800-777-7777)</h5>
        </li>
      </ul>
      <p>
        Visit Us: Candleaf Headquarters 123 Aroma Street, Qesm El Khalifa,
        Cairo, Egypt
      </p>
      <h3>Follow Us</h3>
      <ul>
        <li>
          <h5>
            <a className="text-decoration-none text-black" href="https://www.facebook.com/candleaf/">Facebook</a>
          </h5>
        </li>
        <li>
          <h5>
            <a className="text-decoration-none text-black" href="https://twitter.com/candleaf">Twitter</a>
          </h5>
        </li>
        <li>
          <h5>
            <a className="text-decoration-none text-black" href="https://www.instagram.com/candleaf/">Instagram</a>
          </h5>
        </li>
        <li>
          <h5>
            <a className="text-decoration-none text-black" href="https://www.youtube.com/candleaf">YouTube</a>
          </h5>
        </li>

      </ul>
      <h5>Buisness Hours:</h5>
      <ul>
        <li>Monday-Friday: 9:00 AM - 6:00 PM</li>
        <li>Saturday: 9:00 AM - 4:00 PM</li>
        <li>Sunday: Closed</li>
      </ul>

    </div>
  </>
);

export default ContactUs;
