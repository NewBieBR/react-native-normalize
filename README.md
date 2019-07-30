[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/NewBieBR/react-native-normalize.svg?style=popout)](https://codecov.io/gh/NewBieBR/typescript-react-native-starter)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

# React Native Normalize

**react-native-normalize** is a small and simple package that helps make your React Native app responsive easily.

## Quick example

```JSX
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
    top: normalize(50, 'height'),
    left: normalize(30),
    width: normalize(300),
    height: normalize(300, 'height'),
  },
  text: {
    fontSize: normalize(40),
  },
});

```

### Without `normalize()`
![](https://i.imgur.com/Eb0C2hL.png)
### With `normalize`
![](https://i.imgur.com/GQ8sTtk.png)
