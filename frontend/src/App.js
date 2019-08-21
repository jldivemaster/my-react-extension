import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Ext from './Ext'
import Page from './Page'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const users_api = 'http://localhost:3000/users'
const notes_api = 'http://localhost:3000/notes'

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: true,
      users: [],
      notes: []
    }
  }

  // handleSubmit = event => {
  //   event.preventDefault();
  //   const title = event.target.children[0].value
  //   const notes = event.target.children[1].value
  //   this.setState({
  //     title: title,
  //     notes: notes
  //   })
  // };
  // For props: onSubmit={this.handleSubmit}

  componentDidMount() {
    this.fetchUsers();
    this.fetchNotes()
  }

  fetchUsers = () => {
    fetch(users_api)
    .then(res => res.json())
    .then(users => {
      return this.setUsers(users)
    })
  }

  fetchNotes = () => {
    fetch(notes_api)
    .then(res => res.json())
    .then(notes => {
      return this.setNotes(notes)
    })
  }

setNotes = (notes) => {
  this.setState({
    notes: {notes}
  })
}

setUsers = (users) => {
  this.setState({
    users: {users}
  })
}


  render() {
    return (
      // BoilerPlate React display - to be deleted/changed
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

      <Router>
          <Switch>
            <Route exact path="/page" render={ (props) => <Page users={this.state.users} fetchUsers={this.fetchUsers}
              notes={this.state.notes} fetchNotes={this.fetchNotes} /> } />
            <Route path="/" render={ (props) => <Ext users={this.state.users} fetchUsers={this.fetchUsers}
              notes={this.state.notes} fetchNotes={this.fetchNotes}
              loggedIn={this.state.loggedIn} /> } />
          </Switch>
       </Router>
      </div>
    );
  }
}

// Display Extension component
    // <Ext user={this.state.user} title={this.state.title} notes={this.state.notes}
    // onSubmit={this.handleSubmit}/>



export default App;
