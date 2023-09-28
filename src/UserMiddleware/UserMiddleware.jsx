import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { setUser } from '../Redux/Slice';
import { useDispatch, useSelector } from 'react-redux';

export const UserMiddleware = ({ children }) => {
  const {tokenRedux} = useSelector((state) => state.counter);
  console.log(tokenRedux)
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem('auth'));

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      // Decode the token and dispatch the user information to Redux
      const user = jwtDecode(token);
      dispatch(setUser(user));
    }

    if (token || tokenRedux) {
      // If either token exists in Redux or local storage, navigate to the home page
      navigate('');
    } else {
      // If no token is found, navigate to the login page
      navigate('/login');
    }
  }, [tokenRedux]);

  return <>{children}</>;
};
