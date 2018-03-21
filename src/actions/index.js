import { ADD_REMINDER } from '../constants' //import the ADD_REMINDER variables

//define a reminder and define it as a constant
export const addReminder = (text) {
  const action = {
    type: ADD_REMINDER,
    text: text
  }
  console.log('action in addReminder', action);
  return action;
}
