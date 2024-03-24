import Button from "../Button/Button";
import Wave from "../Wave/Wave";
import phone_1 from "../../assets/images/phone_1.png";
import phone_2 from "../../assets/images/phone_2.png";
import "./Banner.scss";
const Banner = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="box_container">
            <div className="box_container2">
              <div className="box_container3">
                <div className="infor">
                  <h1>Promote Your App with SoftLand</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                  <Button></Button>
                </div>
                <div className="pic">
                  <img className="img1" src={phone_1}></img>
                  <img className="img2" src={phone_2}></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wave">
          <Wave></Wave>
        </div>
      </div>
    </>
  );
};
export default Banner;
