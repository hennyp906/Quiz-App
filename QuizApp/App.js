import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import AppNavigator from './src/navigation/AppNavigator';
import questions from './src/redux/reducers/questions';

const App = () => {
  const rootReducer = combineReducers({
    questions: questions,
  });

  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
