// A function that takes in a token if the token is there it would add it to the headers if not it would delete it from the headers

import axios from 'axios'; // no request with axios here we re making  global header

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }
};

export default setAuthToken;
