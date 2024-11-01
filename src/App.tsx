import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
