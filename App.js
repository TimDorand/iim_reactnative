import React from 'react';

import { createStackNavigator, createAppContainer } from 'react-navigation'
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import HomeScreen from './Home'
import InfoScreen from './Info'

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Info: { screen: InfoScreen },
})

const Navigation = createAppContainer(MainNavigator);

// reducer 
function textReducer(state, action) {
  if (typeof state === 'undefined') {
    return 0;
  }
  switch (action.type) {
    case 'TEXT':
      return { ...state, text: action.payload }
    default:
      return state;
  }
}

// store
let store = createStore(textReducer);

// render with Navigation inside Provider with store
export default class extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}