import { useState } from "react";

export default function ToolTip(props) {
  const [active, setActive] = useState(false);
  let timeout;
  const showTip = () => {
    timeout = setTimeout(() => {
      return !props.content.isFreespace ? setActive(true) : "";
    }, 200);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <li
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
      className="Tooltip-Wrapper"
    >
      {props.children}
      {active && (
        <div className="Tooltip-Tip">
          {!props.content.isFreespace &&
            props.content.characteristics.map((val) => {
              return (
                <label>
                  {val.description}
                  <br />
                  <br />
                </label>
              );
            })}
        </div>
      )}
    </li>
  );
}
