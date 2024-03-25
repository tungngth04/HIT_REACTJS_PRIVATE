// import './Nav.css';
import "./Nav.scss";

const nav = () => {
  return (
    <ul className="ul_nav">
      <li className="li_nav_1">
        <a href="#">Home</a>
      </li>
      <li className="li_nav">
        <a className="a1" href="#">
          Features
        </a>
      </li>
      <li className="li_nav">
        <a className="a1" href="#">
          Pricing
        </a>
      </li>
      <li className="li_nav">
        <a className="a1" href="#">
          Blog
        </a>
      </li>
      <li className="li_nav">
        <a className="a1" href="#">
          Drop Down
        </a>
        <ul className="sub_nav">
          <li className="sub_li_nav">
            <a className="a2" href="#">
              Drop Down 1
            </a>
          </li>
          <li className="sub_li_nav">
            <a className="a2" href="#">
              Deep Drop Down
            </a>
            <ul className="drop_down">
              <li className="li_drop_down">
                <a href="#">Deep Drop Down 1</a>
              </li>
              <li className="li_drop_down">
                <a href="#">Deep Drop Down 2</a>
              </li>
              <li className="li_drop_down">
                <a href="#">Deep Drop Down 3</a>
              </li>
              <li className="li_drop_down">
                <a href="#">Deep Drop Down 4</a>
              </li>
              <li className="li_drop_down">
                <a href="#">Deep Drop Down 5</a>
              </li>
            </ul>
          </li>
          <li className="sub_li_nav">
            <a className="a2" href="#">
              Drop Down 2
            </a>
          </li>
          <li className="sub_li_nav">
            <a className="a2" href="#">
              Drop Down 3
            </a>
          </li>
          <li className="sub_li_nav">
            <a className="a2" href="#">
              Drop Down 4
            </a>
          </li>
        </ul>
      </li>
      <li className="li_nav">
        <a className="a1" href="#">
          Contact US
        </a>
      </li>
    </ul>
  );
};
export default nav;
