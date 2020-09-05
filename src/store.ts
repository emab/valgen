import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import valuesReducer from './components/tabs/store/reducer';
import { Tab } from './types/Tab';
import allValuesReducer from './store/reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  personal: valuesReducer(Tab.PERSONAL),
  current: valuesReducer(Tab.CURRENT),
  ideal: valuesReducer(Tab.IDEAL),
  all: allValuesReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
