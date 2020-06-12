import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import firebase from '../fb';
import CustomView from '../components/customView';
import {Defs, LinearGradient, Stop} from 'react-native-svg';
import {AreaChart, Grid} from 'react-native-svg-charts';
import * as shape from 'd3-shape';

export default class Chart extends Component {
  state = {
    bpm: [],
    number: 0,
  };
  componentDidMount() {
    firebase
      .database()
      .ref('bpm/')
      .on('value', snapshot => {
        if (snapshot.val() != null) {
          let b = snapshot.val();
          let array=Object.values(b);
          //console.log(b, Object.values(b));
          this.setState({bpm: array});
        }
      });
  }
  render() {
    const Gradient = () => (
      <Defs key={'gradient'}>
        <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
          <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} />
          <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'} />
        </LinearGradient>
      </Defs>
    );
    return (
      <View>
        <View style={styles.container}>
          <CustomView number={this.state.bpm.length!=0?this.state.bpm[this.state.bpm.length-1]:0} />
        </View>

        <AreaChart
          style={{height: 250, marginTop: 50}}
          data={this.state.bpm}
          contentInset={{top: 30, bottom: 30}}
          curve={shape.curveNatural}
          svg={{
            strokeWidth: 2,
            stroke: 'url(#gradient)',
          }}>
          <Grid />
          <Gradient />
        </AreaChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
