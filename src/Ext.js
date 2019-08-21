import React from 'react';
import NotesComponent from './NotesComponent';
// import './Ext.css'

export default class Ext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      notes: ""
    }
  }

  onTitleChange = (ev) => {
    this.setState({
      title: ev.target.value
    })
  }

  onNoteChange = (ev) => {
    this.setState({
      notes: ev.target.value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.onSubmit(ev);
    this.setState({
      title: "",
      notes: ""
    })
  }

  render() {
    return(
      <div className={'my-extension'}>
        <p>Extension Component</p>
        <p>Welcome, {this.props.user}</p>
        <form id="noteform" onSubmit={ event => this.handleSubmit(event) }>Title:
            <input type="text" name="title" placeholder="Lab Title"
            onChange={event => this.onTitleChange(event)} value={this.state.title}/>
            <textarea rows="20" cols="40" name="notes" placeholder="Notes" form="noteform"
            onChange={event => this.onNoteChange(event)} value={this.state.notes}></textarea>

          <input type="submit" value="Submit" />
        </form>

      <a
        className="App-link"
        href="http://localhost:3000/page"
        target="_blank"
        rel="noopener noreferrer"
      >Open Page</a>
      <NotesComponent user={this.props.user} title={this.props.title} notes={this.props.notes} />
      </div>
    )
  };
}
