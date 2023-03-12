import seatMap from "../seatMap.json";
import baby from "../assets/baby.png";
import star from "../assets/star.ico";
import slash from "../assets/slash.png";

import ToolTip from "./ToolTip";

export default function SeatMap() {
  return (
    <div className="seat-rows">
      {seatMap.map((row, key) => {
        return (
          <ul key={key} className="seat-row">
            {row.map((values, key) => {
              return (
                <ToolTip content={values}>
                  <li key={key}>{checkValues(values)}</li>
                </ToolTip>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
}

function checkValues(values) {
  let temp;

  if (values.isAvailable) {
    temp = (
      <button
        style={{
          backgroundColor: "#8cbfd8",
          width: "30px",
          height: "30px",
          borderRadius: "5px",
        }}
      ></button>
    );
  } else {
    temp = <img style={{ borderRadius: "5px" }} src={slash} />;
  }

  if (values.isPreferred) {
    temp = (
      <button
        style={{
          backgroundColor: "#8cbfd8",
          width: "30px",
          height: "30px",
          borderRadius: "5px",
        }}
      >
        <img style={{}} src={star} />
      </button>
    );
  }

  if (values.isNotBookable) {
    temp = (
      <button
        style={{
          backgroundColor: "#bab9ab",
          width: "30px",
          height: "30px",
          borderRadius: "5px",
        }}
      ></button>
    );
  }

  if (values.isFreespace) {
    temp = "";
  }

  if (values.isFreespace && values.value != "") {
    temp = values.value;
  }

  if (values.isPaid) {
    temp = (
      <button
        style={{
          backgroundColor: "darkgreen",
          width: "30px",
          height: "30px",
          borderRadius: "5px",
        }}
      >
        <label
          style={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
            fontSize: "28px",
          }}
        >
          +
        </label>
      </button>
    );
  }

  if (!values.isNotBookable && values.isBassinet) {
    temp = (
      <button
        style={{
          backgroundColor: "skyblue",
          width: "30px",
          height: "30px",
          borderRadius: "5px",
        }}
      >
        <img src={baby} />
      </button>
    );
  }

  return temp;
}
