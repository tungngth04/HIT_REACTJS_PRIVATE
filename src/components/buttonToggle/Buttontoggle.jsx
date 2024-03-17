import { useState } from "react";
import "./buttontoggle.css";
const ButtonToggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <button
      className={`button-toggle ${isToggled ? "on" : ""}`}
      onClick={handleToggle}
    >
      <span>{isToggled ? "on" : "off"}</span>
    </button>
  );
};
export default ButtonToggle;
