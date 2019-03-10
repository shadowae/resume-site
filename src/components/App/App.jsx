import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './App.css';
import Header from '../Header';
import Timeline from '../Timeline';
import mocks from '../../mocks';

const { VerticalTimelineSample } = mocks;
/* eslint-disable */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar expand="true">
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <Header />
        <Timeline vtlElements={VerticalTimelineSample} />
      </div>
    );
  }
}

App.propTypes = {};

export default App;
