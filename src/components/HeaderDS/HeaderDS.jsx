import { useState } from "react";
import "./HeaderDS.scss";

const BannerDS = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <header className="header">
      <div className="content">
        <div className="header-logo">
          <img src="https://hit-reactjs-2024.vercel.app/assets/logo-B5ukk7LZ.png"></img>
        </div>
        <nav className="header-nav">
          <a href="">Home</a>
          <a className="user">User</a>
          <a href="">Blogs</a>
          <a href=""> Service</a>
          <a href="">Contact</a>
        </nav>
        <div className="header-toggle" onClick={handleToggle}>
          <div className={`button-toggle ${!toggle ? "d" : "l"}`}></div>
        </div>
      </div>
    </header>
  );
};
export default BannerDS;
