import {View, Text, StyleSheet} from 'react-native';
import React, {Component} from 'react';
export default class CustomView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.number}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: '#ff9a9e',
    borderRadius: 100,
  },
  text: {
    fontSize: 100,
    color: 'white',
  },
});
