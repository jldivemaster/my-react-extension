import React from 'react'

export default class NotesComponent extends React.Component {

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
