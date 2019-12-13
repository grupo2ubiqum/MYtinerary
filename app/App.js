import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import AppNavigator from "./Components/HomeNav"
import { Provider } from "react-redux";
import store from './Store/store'

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "red",
  }
});