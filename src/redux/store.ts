import reducer from './reducers';
import {createStore, applyMiddleware} from "redux";
import reduxThunk from 'redux-thunk';
export default createStore(reducer, applyMiddleware(reduxThunk));
