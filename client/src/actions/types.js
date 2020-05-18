export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const GET_PROFILE = 'GET_PROFILE';
export const PROFILE_ERROR = 'PROFILE_ERROR';

// the place we would do our axios request to the backend is going to be in the actions folder in a auth file. We would make a request get a response if its a successful response we would dispatch REGISTER_SUCCESS if its a fail we would do  REGISTER_FAIL
