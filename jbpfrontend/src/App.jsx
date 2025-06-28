import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from "./routes/AppRoutes";
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
