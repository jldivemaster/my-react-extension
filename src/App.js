import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Ext from './Ext'

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: "Me",
      title: "",
      notes: ""
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    const title = event.target.children[0].value
    const notes = event.target.children[1].value
    console.log(notes)
    this.setState({
      title: title,
      notes: notes
    })
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Ext user={this.state.user} title={this.state.title} notes={this.state.notes}
          onSubmit={this.handleSubmit}/>
        </header>

      </div>
    );
  }
}

export default App;
