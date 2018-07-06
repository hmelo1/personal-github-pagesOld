import React, { Component, Fragment } from "react";
import { Header, Footer } from './Layouts';
import HomePortPage from './HomePortPage';
import MyGameList from './MyGameList';
import PhoNomenal from './PhoNomenal';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path='/' component={HomePortPage} />
          <Route exact path='/portfolio' component={HomePortPage} />
          <Route exact path='/phonomenal' component={PhoNomenal} />
          <Route exact path='/mygamelist' component={MyGameList} />
        </Switch>
      </Fragment>
    )
  }
}