import { combineReducers } from 'redux';
import searchPageReducer from './SearchPage/searchPageReducer';

const rootReducer = combineReducers({
  searchPageReducer,
});

export default rootReducer;
