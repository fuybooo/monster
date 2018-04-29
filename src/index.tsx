import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './containers/App';
import './common/init.less';
import './common/index.less';
import './common/app-base.less';
import registerServiceWorker from './registerServiceWorker';
import {Switch, HashRouter as Router, Route} from 'react-router-dom';
import store from './redux/store';
import Home from './containers/Home';
import Lesson from './containers/Lesson';
import Profile from './containers/Profile';
import {Provider} from 'react-redux';
import Detail from './containers/Detail';

window['_store'] = store;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          {/*纯粹的路由*/}
          <Route exact path={'/'} component={Home}/>
          <Route path={'/lesson'} component={Lesson}/>
          <Route path={'/profile'} component={Profile}/>
          <Route path={'/detail'} component={Detail}/>
        </Switch>
      </App>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
