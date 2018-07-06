import { Information, Name } from './HomepageItems';
import React, { Component, Fragment } from "react";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Name />
        <Information />
      </Fragment>
    )
  }
}