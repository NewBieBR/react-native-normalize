[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Codecov Coverage](https://img.shields.io/codecov/c/github/NewBieBR/react-native-normalize.svg?style=popout)](https://codecov.io/gh/NewBieBR/typescript-react-native-starter)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

# React Native Normalize

**react-native-normalize** is a small and simple package that helps make your React Native app responsive easily.

It comes with a function `normalize` that will adapt a value depending on the screen's width or height


```javascript
// on iPhone 8
normalize(100)          // = 100
normalize(50, 'height') // = 50

// on iPhone 5s
normalize(100)          // = 86
normalize(50, 'height') // = 43

// on iPhoneXs Max
normalize(100)          // = 110
normalize(50, 'height') // = 67
```

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
```

### Without `normalize()`
![](https://i.imgur.com/bLbnjsC.jpg)
### With `normalize`
![](https://i.imgur.com/4IqqAR2.jpg)
