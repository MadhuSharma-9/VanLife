import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="home">
        <h1>Welcome to Vanlife</h1>
        <h2>You got the travel plans, we got the travel vans.</h2>
        <p>
          This page helps you to find van of your type for your trip. Add
          adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <div className="buttons">
          <button className="primary" >
            <Link to="/vans">Explore more Vans</Link>
          </button>
          <button className="secondary" >
            <Link to="/about">More About us...</Link>
          </button>
        </div>
      </div>
    </>
  );
}
