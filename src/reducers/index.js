import { ADD_REMINDER } from '../constants';

//helper reminder function that returns an object as a reminder function
const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random()
  }
}

//reducermethod takes a state parameter and an action paramter
const reminders = (state = [], action) => {
  let reminders = null; //This is set to null but will eventually be a return state

  //use a switch action to handle the different action types that we may receive
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];  //ES6 allows us to copy the contents of one array object to another array object by setting [..ARRAY_NAME]
      console.log('reminders as state', reminders);
      return reminders;

    //default is to return the current state from above
    default:
      return state;
  }
}

export default reminders;  //export so that other functions can find these functions
