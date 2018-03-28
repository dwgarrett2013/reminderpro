import { ADD_REMINDER, GREAT_COURSE } from '../constants' //import the ADD_REMINDER variables

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

//define a greatcourse actionCreator
export const greatCourse= (text) => {
  //this creates and action
  const action = {
    type: GREAT_COURSE,
    text: text
  }
  console.log('action in greatCourse', action);

  //return the action when you are done creating it
  return action;
}
