/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Navigator,
  StyleSheet
} from 'react-native';

import Router from 'react-native-simple-router';

import App from './components/App'
import TaskList from './components/TaskList'

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#2196f3',
  },
});

export default class TimeTrackerDroid extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ component: <TaskList /> }}
        renderScene={(route, navigator) => {
          return route.component;
        }} />
    );
  }
}

AppRegistry.registerComponent('timetrackerdroid', () => TimeTrackerDroid);
