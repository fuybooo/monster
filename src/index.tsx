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
import settings from './common/settings';
import ApiDocHome from "./components/ApiDoc/Home";


window['_store'] = store;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        {
          (() => {
            if (settings.project === 'api-doc') {
              return (
                <Switch>
                  <Route exact path={'/'} component={ApiDocHome}/>
                </Switch>
              );
            } else {
              return (<Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route path={'/lesson'} component={Lesson}/>
                        <Route path={'/profile'} component={Profile}/>
                        <Route path={'/detail'} component={Detail}/>
                      </Switch>);
            }
          })()
        }
      </App>
    </Router>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
