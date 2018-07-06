import React, { Component, Fragment } from "react";
import { Header, Footer } from './Layouts';
import Homepage from './Homepage';
import Portfolio from './Portfolio';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/portfolio' component={Portfolio} />
        </Switch>
        <Footer />
      </Fragment>
    )
  }
}