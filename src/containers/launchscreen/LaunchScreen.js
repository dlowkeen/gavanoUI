import React, {Component} from 'react';
import {Text, View} from 'react-native';

// Styles
import styles from './styles';
import {ApplicationStyles} from '../../themes';

export default class LaunchScreen extends Component {
  render() {
    return (
      <View style={styles.centered}>
        <Text style={ApplicationStyles.sectionTitle}>Gavano</Text>
        <Text>Hello World</Text>
      </View>
    );
  }
}
