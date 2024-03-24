// import '../Footer/footer.css';
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contentf">
        <div className="row1">
          <div className="col1">
            <h3>About SoftLand</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea
              delectus pariatur, numquam aperiam dolore nam optio dolorem
              facilis itaque voluptatum recusandae deleniti minus animi.
            </p>
            <p>
              <a className="a1" href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a className="a1" href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a className="a1" href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a className="a1" href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </p>
          </div>
          <div className="col2">
            <div className="box_col2">
              <div className="col21">
                <h3>Navigation</h3>
                <ul className="list">
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col21">
                <h3>Services</h3>
                <ul className="list">
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Collaboration</a>
                  </li>
                  <li>
                    <a href="#">Todos</a>
                  </li>
                  <li>
                    <a href="#">Events</a>
                  </li>
                </ul>
              </div>
              <div className="col21">
                <h3>Downloads</h3>
                <ul className="list">
                  <li>
                    <a href="#">Get from the App Store</a>
                  </li>
                  <li>
                    <a href="#">Get from the Play Store</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row2">
          <div className="bet1">
            <p>© Copyright SoftLand. All Rights Reserved</p>
          </div>
          <div className="bet1">
            <p>
              Designed by{" "}
              <span>
                <a href="#">BootstrapMade</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
