import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Routes from "./Routes";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container">
        {/*the fluid attribute ensures the navbar fits to the container's width*/}
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Noted</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
