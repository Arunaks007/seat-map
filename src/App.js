import "./App.css";
import SeatMap from "./components/SeatMap";

export default function App() {
  return (
    <div className="App">
      <header className="seat-container-header">Seat Map</header>
      <div>
        <header className="destination-header">
          <label>BAH - Bahrain</label>
          <label>LHR - London</label>
        </header>
        <div className="seat-map-container">
          <table className="passenger-details">
            <thead>
              <tr>
                <th>Id</th>
                <th>Passenger Name</th>
                <th>Type</th>
                <th>Seat Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>JOHNSON/ALBERT ANN MRS</td>
                <td>ADT</td>
                <td>Not Selected</td>
              </tr>
            </tbody>
          </table>
          <div className="seat-map">
            <center>
              <h2>ECONOMY</h2>
            </center>
            <SeatMap />
          </div>
        </div>
      </div>
    </div>
  );
}
