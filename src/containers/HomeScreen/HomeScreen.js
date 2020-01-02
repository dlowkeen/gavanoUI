import React from 'react';
import {AsyncStorage, Button, View} from 'react-native';
import {ApplicationStyles} from '../../themes';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Gavano',
  };

  render() {
    return (
      <View style={ApplicationStyles.screen.container}>
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
