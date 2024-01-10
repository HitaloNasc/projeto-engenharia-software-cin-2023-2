import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import * as React from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import './index.css';

const App = () => (
  <Router>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
reportWebVitals();
