import React from 'react';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
import Dashboard from 'pages/Dashboard';
import ProtectedRoute from 'pages/Init/ProtectedRoute';

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={(
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )}
      />
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
}

export default Router;
