import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import {createStackNavigator} from 'react-navigation';
import AppNavigator from './navigation/AppNavigator';
import EventList from './EventList';
import EventForm from './EventForm';

export default createStackNavigator({
  Home: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Your Events',
    }),
  },
  Form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Add an event',
    }),
  },
});
