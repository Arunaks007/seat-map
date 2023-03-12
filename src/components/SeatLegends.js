import baby from "../assets/baby.png";
import star from "../assets/star.ico";
import slash from "../assets/slash.png";

export default function SeatLegends() {
  return (
    <div className="seat-legends">
      <ul style={{ textAlign: "left" }}>
        <li>
          <button
            style={{
              backgroundColor: "#8cbfd8",
              width: "30px",
              height: "30px",
              borderRadius: "5px",
              padding: "10px",
            }}
          ></button>
          Available
        </li>
        <li>
          <img style={{ borderRadius: "5px" }} src={slash} />
          Unavailable
        </li>
        <li>
          <button
            style={{
              backgroundColor: "#bab9ab",
              width: "30px",
              height: "30px",
              borderRadius: "5px",
            }}
          ></button>
          Not Bookable
        </li>
        <li>
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
          Bassinet
        </li>
        <li>
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
          Paid
        </li>
        <li>
          <button
            style={{
              backgroundColor: "#8cbfd8",
              width: "30px",
              height: "30px",
              borderRadius: "5px",
            }}
          >
            <img src={star} />
          </button>
          Preferred
        </li>
      </ul>
    </div>
  );
}
