import { ADD_REMINDER, DELETE_REMINDER} from '../constants';

//Reducers section will return a new state to set in the store

//helper reminder function that returns an object as a reminder function
const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random()
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

  //use a switch action to handle the different action types that we may receive.  These are triggered using the actionCreator function
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];  //ES6 allows us to copy the contents of one array object to another array object by setting [..ARRAY_NAME]
      console.log('reminders as state', reminders);

      //return latest ste of reminders to set the global state
      return reminders;

    //we cannot modify state directly, so we need to return a new state using removeById function
    case DELETE_REMINDER:
      //we will set reminders equal to to the action.id that was specified in the deleteReminder action
      reminders=removeById(state, action.id);

      //return latest ste of reminders to set the global state
      return reminders;

    //default is to return the current state from above
    default:
      return state;
  }
}

export default reminders;  //export so that other functions can find these functions
