// Components/ProtectedRoute/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ element, requiredRole }) => {
  const token = localStorage.getItem('jwtToken');

  if (!token) {
    console.warn('No token found. Redirecting to login.');
    return <Navigate to="/login" replace />;
  }

  try {
    const decoded = jwtDecode(token);

    // Optional: Clean dev logs
    if (import.meta.env.MODE === 'development') {
      console.log('Decoded Token:', decoded);
      console.log('Required Role:', requiredRole);
    }

    if (requiredRole && decoded.role !== requiredRole) {
      console.warn(`Access denied. Expected role: ${requiredRole}, found: ${decoded.role}`);
      return <Navigate to="/notfound" replace />;
    }

    return element;
  } catch (err) {
    console.error('Invalid token. Redirecting to login.', err);
    return <Navigate to="/login" replace />;
  }
};

export default ProtectedRoute;
