import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { setToken, setUser } from '../Redux/Slice';
import { useDispatch, useSelector } from 'react-redux';

export const UserMiddleware = ({ children }) => {
  const { tokenRudex } = useSelector((state) => state.counter);
  const { user } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const token = JSON.parse(localStorage.getItem('auth'));

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      // Decode the token and dispatch the user information to Redux
      const user = jwtDecode(token);
      dispatch(setUser(user));
      dispatch(setToken(token));
      navigate('/');
    } else {
      navigate('/login');
    }

    if (token || tokenRudex) {
      // If either token exists in Redux or local storage, navigate to the home page
      navigate('');
    } else {
      // If no token is found, navigate to the login page
      navigate('/login');
    }
  }, [tokenRudex]);

  return <>
    {
      children
    }
  </>;
};
