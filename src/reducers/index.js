import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS} from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies'; //allows us to set up cookies with the store

//Reducers section will return a new state to set in the store

//helper reminder function that returns an object as a reminder function
const reminder = (action) => {



  //simplified verison allows us to auto assign values from the received action object
  //let { text, dueDate } = action;
  return {
    id: Math.random(),
    text: action.text,
    dueDate: action.dueDate
  }
}

//helper function to return the new state
const removeById = (state = [], id) => {
  //We want to filter all objects in the array that are not equal to the id to create the "removed" list
  const reminders=state.filter(reminder => reminder.id !== id);
  console.log('new reduced remidners', reminders);
  return reminders;
}

//reducermethod takes a state parameter and an action paramter
/*
  THIS IS CRITICAL: Step 3 of adding Delete Reminder: update the reducer case logic to handle event change
*/
const reminders = (state = [], action) => {
  let reminders = null; //This is set to null but will eventually be a return state
  //we want to read the values in cookies before we present state
  state = read_cookie('reminders');
  //use a switch action to handle the different action types that we may receive.  These are triggered using the actionCreator function
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];  //ES6 allows us to copy the contents of one array object to another array object by setting [..ARRAY_NAME]

      //add the cookies
      bake_cookie('reminders', reminders);  //param 1 is the flag for the cookie to store, param 2 is the value to store

      //return latest ste of reminders to set the global state
      return reminders;

    //we cannot modify state directly, so we need to return a new state using removeById function
    case DELETE_REMINDER:
      //we will set reminders equal to to the action.id that was specified in the deleteReminder action
      reminders=removeById(state, action.id);

      //we need to replace the cookie as well with the updated reminder array that has cookies removed
      bake_cookie('reminders', reminders);
      //return latest ste of reminders to set the global state
      return reminders;

    //instance where we delete all reminders
    case CLEAR_REMINDERS:
      reminders = []; //set reminders to an empty array
      //we need to replace the cookie as well with the updated reminder array that has cookies removed
      bake_cookie('reminders', reminders);
      return reminders;

    //default is to return the current state from above
    default:
      return state;
  }
}

export default reminders;  //export so that other functions can find these functions
