import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Home from './screens/Home';

export default class App extends Component {
  render() {
    return (
      <View>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({});