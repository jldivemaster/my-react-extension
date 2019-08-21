import React, { Fragment } from 'react'
import NotesContainer from './NotesContainer';
import UserContainer from './UserContainer'
import './Page.css'

export default class Page extends React.Component {

  render() {
    return(
      <div id="page-root">
      <Fragment>
      <p>Page Component</p>
      <p>Welcome, {this.props.user}</p>
      <UserContainer user={this.props.user} onUserChange={this.props.onUserChange}/>

      <NotesContainer  notes={this.props.notes}
       onNoteChange={this.props.onNoteChange} onSubmit={this.props.onSubmit}/>

      </Fragment>
      </div>
    )
  }
}
