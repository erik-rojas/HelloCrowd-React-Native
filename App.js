/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './src/js/store';

import LoginScreen from "./src/js/screens/LoginScreen";
import DashboardScreen from "./src/js/screens/Dashboard";
import MyProfileScreen from "./src/js/screens/MyProfile";
import ProfileDetailScreen from "./src/js/screens/ProfileDetail";
// if (__DEV__) {
//   import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
// }

// code for monitoring network requests in network tab of google chrome inspector
XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
  GLOBAL.originalXMLHttpRequest :
  GLOBAL.XMLHttpRequest;

// fetch logger
global._fetch = fetch;
global.fetch = function (uri, options, ...args) {
  return global._fetch(uri, options, ...args).then((response) => {
    console.log('Fetch', { request: { uri, options, ...args }, response });
    return response;
  });
};

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LoginScreen {...this.props} />
      </View>
    )
  }
}

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  MyProfile: { screen: MyProfileScreen },
  ProfileDetail: { screen: ProfileDetailScreen },
  Dashboard: { screen: DashboardScreen },
  Login: { screen: LoginScreen },
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    )
  }
}
const AppContainer = createAppContainer(AppSwitchNavigator);
export default App;
