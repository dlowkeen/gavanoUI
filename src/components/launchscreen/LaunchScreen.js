import React, {Component} from 'react';
import {Text, View} from 'react-native';

// Styles
import styles from './styles';

export default class LaunchScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Hello World</Text>
      </View>
    );
  }
}
