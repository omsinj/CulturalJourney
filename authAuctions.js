// src/actions/authActions.js

import axios from 'axios';

export const register = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8000/api/users/', userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAIL', payload: error.response.data });
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8000/api/login/', userData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error.response.data });
  }
};

export const logout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
};
