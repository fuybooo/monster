import * as React from 'react';
import Tab from "../components/Tab";

export default class App extends React.Component {
  public render() {
    return (
      <div>
        {this.props.children}
        <Tab/>
      </div>
    );
  }
}
