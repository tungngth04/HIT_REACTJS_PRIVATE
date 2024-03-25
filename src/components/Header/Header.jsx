import Nav from "../Nav/nav";
// import './Header.css';
import "./Header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="box_header">
        <div className="logo">
          <h1>
            <a href="#">SoftLand</a>
          </h1>
        </div>
        <Nav></Nav>
      </div>
    </header>
  );
};
export default Header;
