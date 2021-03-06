import * as React from 'react';
import Tab from '../components/Tab';
import settings from '../common/settings';

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/*路由 - 内容区域*/}
        {this.props.children}
        {/*底部 tab*/}
        {
          (() => {
            if (settings.project === 'api-doc') {
              return (null);
            } else {
              return (<Tab/>);
            }
          })()
        }
      </div>
    );
  }
}
