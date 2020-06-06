import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import post from './post'; // for anything you want to add to the app you just create a new reducer and a new action file and then create the component

export default combineReducers({
  alert,
  auth,
  profile,
  post,
});

// using jsonwebtoken is a stateless form of authentication so we have to keep querying th server and seeing if the token matches i.e. we have to keep sending a request to load the user
//Solution is to create an action to hit that api/auth route to get the user and we want that to run on every single load whenever the main app component loads we want that to get called so we can validate it make sure the user is logged in or checked to see if they re logged in and then apply whatever we need to the state

// taking the token that we have stored sending it to the backend for validation and then loading the user and that happens every time the app main component is loaded
