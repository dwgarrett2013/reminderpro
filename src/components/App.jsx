import React, { Component } from 'react';
import { connect } from 'react-redux';  //this allows you to connect to the redux store.  Imports the connect function.  requires 2 functions react components 1.  map states to props, map dispatch to props function
//dont need bind action creators if you are importing regularly
//import { bindActionCreators } from 'redux'; //iports required function to take advantage of map dispatch to props function
import { addReminder } from '../actions';  //imports the addReminder from our actions

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
  //want to create a state to take user input from form
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  //calls the addReminder function using the action dispatcher later on
  addReminder() {
    this.props.addReminder(this.state.text);
  }

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
              onChange={event => this.setState({text: event.target.value})}
            />
          </div>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.addReminder()}
          >
          Add Reminder
          </button>
        </div>
      </div>
    )
  }
}

//This is a function to bind the action creator to this function
//It binds action creators to dispatch function and makes it accessible as propers in the connect function
//Dont need if you import addReminder
/*
function mapDispatchToProps(dispatch) {
  return bindActionCreators({addReminder}, dispatch);
}
*/

//This is the default
//export default connect(null, mapDispatchToProps)(App);

//Can do a simplified versuiion.
export default connect(null, { addReminder })(App);
