import * as React from 'react';
import Tab from "../components/Tab";
import HomeHeader from "../components/HomeHeader";

export default class App extends React.Component {
  public render() {
    return (
      <div>
        {/*路由*/}
        {this.props.children}
        {/*头部*/}
        <HomeHeader/>
        {/*底部tab*/}
        <Tab/>
      </div>
    );
  }
}
