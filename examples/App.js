import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import normalize from 'react-native-normalize';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>React Native Normalize</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center',
    top: normalize(180, 'height'),
    left: normalize(40),
    width: normalize(300),
    height: normalize(300),
    borderRadius: normalize(150),
    backgroundColor: '#009fcd',
  },
  text: {
    fontSize: normalize(60),
    color: 'white',
  },
});
