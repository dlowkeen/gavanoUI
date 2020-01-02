import React from 'react';
import {AsyncStorage, Button, StyleSheet, View} from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Gavano',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Recent Offsets" onPress={this._showMoreApp} />
        <Button title="Settings" onPress={this.goToSettings} />
        <Button title="Sign Out" onPress={this._signOutAsync} />
      </View>
    );
  }

  goToSettings = () => {
    this.props.navigation.navigate('Settings');
  };

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
