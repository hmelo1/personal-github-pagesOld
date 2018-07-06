import React, { Component } from "react";
import Display from './Display';
import { BrowserRouter as Router } from 'react-router-dom';

export default class extends Component {
  render() {
    return (
      <Router>
        < Display />
      </Router>
    );
  }
}

