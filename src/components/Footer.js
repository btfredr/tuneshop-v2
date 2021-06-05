const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__row">
          <div className="footer__column">
            <h4 className="footer__heading">Tuneshop</h4>
            <ul className="footer__list">
              <li>+4798622316</li>
              <li>Bergen, Norway</li>
            </ul>
          </div>
          <div className="footer__column">
            <h4 className="footer__heading">Find us here</h4>
            <ul className="footer__list">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <div className="footer__column">
            <h4 className="footer__heading">Any Questions?</h4>
            <ul className="footer__list">
              <li>Customer Service</li>
              <li>Contact Us</li>
              <li>Terms and conditions</li>
            </ul>
          </div>
        </div>
        <div className="footer__row">
          <p className="footer__bottom">
            &copy;{new Date().getFullYear()} Tuneshop | All rights reserved |
            Terms of Service | Privacy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
