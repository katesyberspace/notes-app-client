import React, { Component } from "react";
import { PageHeader, ListGroup, ListGroupItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { API } from "aws-amplify";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      notes: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    try {
      const notes = await this.getNotes();
      this.setState({ notes });
    } catch (error) {
      alert(error);
    }

    this.setState({ isLoading: false });
  }

  getNotes(){
    return API.get("notes", "/notes");
  }

  renderNotesList(notes) {
    //concats [{}] with notes array, so that idx 0 of new array is {}; this ensures the new note LinkContainer will always render first regardless of whether there are any notes in the notes array
    return [{}].concat(notes).map(
      (note, idx) =>
        idx === 0
          ? <LinkContainer
              key="new"
              to="/notes/new"
            >
              <ListGroupItem>
                <h4>
                  <b>{"\uFF0B"}</b> Create a new note
                </h4>
              </ListGroupItem>
            </LinkContainer>
          : <LinkContainer
              key={note.noteId}
              to={`notes/${note.noteId}`}
            >
              <ListGroupItem header={note.content.trim().split("\n")[0]}>
                {"Created: " + new Date(note.createdAt).toLocaleString()}
              </ListGroupItem>
            </LinkContainer>
    );
  }

  renderNotes() {
    return (
      <div className="note">
        <PageHeader>Your Notes</PageHeader>
        <ListGroup>
          {!this.state.isLoading && this.renderNotesList(this.state.notes)}
        </ListGroup>
      </div>
    )
  }

  renderLander() {
    return (
      <div className="lander">
        <h1>Noted</h1>
        <p>A simple note taking app</p>
      </div>
    )
  }

  render() {
    return (
      <div className="Home">
        {this.props.isAuthenticated ? this.renderNotes() : this.renderLander()}
      </div>
    );
  }
}