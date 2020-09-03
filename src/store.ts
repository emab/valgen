import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import valuesReducer from './components/tabs/store/reducer';
import { Tab } from './types/Tab';

const rootReducer = combineReducers({
  personal: valuesReducer(Tab.PERSONAL),
  current: valuesReducer(Tab.CURRENT),
  ideal: valuesReducer(Tab.IDEAL),
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
