import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Chart from '../components/charts';
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Chart />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
