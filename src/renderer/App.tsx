import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button } from 'react-bootstrap';
import PageTest from './pages/PageTest';

const MainMenu = () => {
  return (
    <div className="PageRoot w-100 h-100">
      <div className="MainMenu">
        <Link to="Test">
          <Button className="MainMenuItem">Align / Calibrate</Button>
        </Link>
        <Link to="Test">
          <Button className="MainMenuItem">Load Coupons</Button>
        </Link>
        <Link to="Test">
          <Button className="MainMenuItem">Manual Test</Button>
        </Link>
        <Link to="Test">
          <Button className="MainMenuItem">Auto Test</Button>
        </Link>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/Test" element={<PageTest />} />
      </Routes>
    </Router>
  );
}
