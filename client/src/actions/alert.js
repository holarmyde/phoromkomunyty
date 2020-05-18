import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

//setalert is what is being called setting the message and alertype
export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  const id = uuidv4(); // it would generate an id with an alerttype as above. It would then dispatch SET_ALERT with that message alerttype and id

  // you then dispatch set alert with the message, alerttype and id which is added to the array in reducer alert.js like this

  // return [...state, payload];
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout); // in the reducer it would filter out the payload
};

/** 
import { v4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  const id = v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};
*/
