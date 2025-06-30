// src/routes/AppRoutes.jsx
import React from 'react';
import LandingPage from '../pages/LandingPage';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import UserDashboard from '../pages/UserDashboard';
import { Route, Routes } from 'react-router-dom';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<UserDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
