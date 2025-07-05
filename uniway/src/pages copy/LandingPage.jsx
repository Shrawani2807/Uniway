import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="container">
      <h2>Welcome to Uniway</h2>
      <p>Navigate your campus with real-time maps and personalized routes.</p>
      <Link to="/login"><button>Login</button></Link>
    </div>
  );
}

export default LandingPage;