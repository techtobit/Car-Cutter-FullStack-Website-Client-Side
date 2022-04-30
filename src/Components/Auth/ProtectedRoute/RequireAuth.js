import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import ReloadAnimation from '../../Animation/ReloadAnimation';

const RequireAuth = ({ children }) => {
 const [user, loading] = useAuthState(auth)
 let location = useLocation();

 if (loading) {
  return <ReloadAnimation></ReloadAnimation>
 }

 if (!user) {
  return <Navigate to='/logIn' state={{ from: location }} replace></Navigate>
 }
 return children;
};

export default RequireAuth;