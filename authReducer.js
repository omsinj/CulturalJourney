// src/reducers/authReducer.js

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case 'REGISTER_FAIL':
    case 'LOGIN_FAIL':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
