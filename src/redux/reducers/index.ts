import home from './home';
import apiDoc from './api-doc';
import header from './header';
import {combineReducers} from 'redux';
export default combineReducers({
  home,
  apiDoc,
  header
});