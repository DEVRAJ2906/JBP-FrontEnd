// src/routes/AppRoutes.jsx
import React from 'react';
import LandingPage from '../pages/LandingPage';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import UserDashboard from '../pages/UserDashboard';
import AppliedJobs from '../pages/AppliedJobs';
import FavouriteJobs from '../pages/FavouriteJobs';
import JobAlerts from '../pages/JobAlerts'
import UserSettings from '../pages/UserSettings'
import { Route, Routes } from 'react-router-dom';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<UserDashboard />} >
      <Route index element={<UserDashboard />} /> {/* Show this on /dashboard */}
        <Route path="applied" element={<AppliedJobs />} />
        <Route path="favourite" element={<FavouriteJobs />} />
        <Route path="alerts" element={<JobAlerts />} />
        <Route path="settings" element={<UserSettings />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
