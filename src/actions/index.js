import { ADD_REMINDER, DELETE_REMINDER } from '../constants' //import the ADD_REMINDER variables
//Also need to import the deleteReminder constant for delete reminder purposes

//define a reminder actionCreator and define it as a constant
export const addReminder = (text) => {
  //this creates and action
  const action = {
    type: ADD_REMINDER,
    text: text
  }
  console.log('action in addReminder', action);
  //return the action when you are done creating it
  return action;
}

/*
  THIS IS CRITICAL!!!!!!
*/

//Step 2 of reduct logic for deleteReminder, create an actionCreator
//in order to delete reminder, we need to know the id, so id is a paarmater to the arguement
export const deleteReminder= (id) => {
  //this creates and action
  const action = {
    type: DELETE_REMINDER,
    id    //this will be the value that we pass in as a parameter
  }
  console.log('deleteing in action', action);  //let me know that a deleteReminder action was created

  //return the deleteReminder action when you are done creating it
  return action;
}
