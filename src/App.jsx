import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Register from'./Pages/Register';
import Login from'./Pages/Login';
import Dashboard from'./Pages/Dashboard';


const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
      </Router>
  );
};

export default App;