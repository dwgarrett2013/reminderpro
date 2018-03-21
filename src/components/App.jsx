import React, { Component } from 'react';

//ActionCreator for reminder addReminder Action
/*
function() {
  return {
    type: 'ADD_REMINDER',
    payload:
  }
}
*/

//create component and use bootstrap to create a form inline
//form group is a group field
//add a button for submit, using classname from bootstrap
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          Reminder Pro
        </div>
        <div className="form-inline">
          <div className="form-group">
            <input
              className="form-control"
              placeholder="I have to..."
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
          >
          Add Reminder
          </button>
        </div>
      </div>
    )
  }
}

export default App;
