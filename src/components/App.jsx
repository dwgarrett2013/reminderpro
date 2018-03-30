import React, { Component } from 'react';
import { connect } from 'react-redux';  //this allows you to connect to the redux store.  Imports the connect function.  requires 2 functions react components 1.  map states to props, map dispatch to props function
//dont need bind action creators if you are importing regularly
import { bindActionCreators } from 'redux'; //iports required function to take advantage of map dispatch to props function
import { addReminder, deleteReminder } from '../actions';  //imports the addReminder from our actions
//also importing delete Reminder

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
  //this.props.addReminder is refered to as the dispatch action and calls the aciton from dispatch
  addReminder() {
    this.props.addReminder(this.state.text);
  }

  //this is a helper method to delete the reminder
  //this.props.deleteRemidner is refered to as the dispatch action and calls the aciton from dispatch
  deleteReminder(id) {
    console.log('deletiong in application', id);
    console.log('this.props', this.props);

    //critial to call to actually invoke the delete groceries
    this.props.deleteReminder(id);
  }

  //returns unorderd list of reminders submitted by Users
  //also allwo the ability to delete a reminder
    //use the unicode to create a star
  //this list button allows us to pass the id of the dispalyed object back

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group col-sm-4">
        {
          reminders.map(reminder => {
            return (
              <li key={reminder.id} className="list-group-item">
                <div className="list-item">{reminder.text}</div>
                <div
                  className="list-item delete-button"
                  onClick={() => this.deleteReminder(reminder.id)}
                >
                  &#x2715;
                </div>
              </li>
            )
          })
        }
      </ul>
    )
  }

  //curly braces within jsx allows us to render and run code within jsx
  //The call to addReminder invokes an action creator which updates the global store
  //The reducer receives the action that was created and uses that to interpret how to update
  render() {
    return (
      <div className="App">
        <div className="title">
          Reminder Pro
        </div>
        <div className="form-inline reminder-form">
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
        { this.renderReminders() }
      </div>
    )
  }
}

//This function returns a state with reminders to be interpreted by the reducer.  Doing so ensures that we return a new state in the reducer function
function mapStateToProps(state) {
  //return plain object with reminders as states
  //not just updating state, but
  return  {
    reminders: state
  }
}

//This is a function to bind the action creator to this function
//It binds action creators to dispatch function and makes it accessible as propers in the connect function
//Dont need if you import addReminder

//Step 3 to handling delete Reminder: add delete reminder to bind action creators, can also do this in the simpliefied vervsion
//By calling addReminder(this is imported from actions and using these as action creators, you are able to update the global store)
//the addRemidner and delete reminder methods will be called using this.props.addReminder() and this.props.deleteReminder() via helper functions
function mapDispatchToProps(dispatch) {
  //retun the addReminder function that was imported
  //when we add reminder, we invoke the methods
  //uses dispatch function to update global state using action creator
  //connect feature smakes components assessible
  //you can add deleteReminder in there
  return bindActionCreators({addReminder, deleteReminder}, dispatch);
}



//This is the default
//The first argument can mapStateToProps, the second arguemnet is the mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);

//Can do a simplified versuiion with ES6 but can make more confusing
//export default connect(mapStateToProps, { addReminder, deleteReminder })(App);
