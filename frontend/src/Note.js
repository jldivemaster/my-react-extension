import React from 'react'

export default class Note extends React.Component {
// Basic NotesComponent
  render() {
    return(
      <div>
        <p>Rendering Notes Component</p>
        <p>Lab: {this.props.title}</p>
        <p>Notes: {this.props.notes}</p>
      </div>
    )
  }
}
