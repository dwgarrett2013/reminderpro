import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants' //import the ADD_REMINDER variables
//Also need to import the deleteReminder constant for delete reminder purposes
//need to import clear reminders

//define a reminder actionCreator and define it as a constant, adding a second reminder
export const addReminder = (text,dueDate) => {
  //this creates and action
  const action = {
    type: ADD_REMINDER,
    text: text,
    dueDate: dueDate
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

/*
  THIS IS CRITICAL!!!!!!
*/

//Step 2 of reduct logic for clearReminders, create an actionCreator
//Create an actionCreator that clears all reminders
//it does not need an input since it is clearing all
export const clearReminders= () => {
  return {
    type: CLEAR_REMINDERS
  }
}
