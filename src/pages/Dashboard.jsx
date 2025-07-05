import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="container">
      <h2>Dashboard</h2>
      <p>Search for buildings or places and get directions.</p>
      <Link to="/map"><button>Go to Map</button></Link>
    </div>
  );
}

export default Dashboard;