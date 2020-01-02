import React from 'react';
import {AsyncStorage, Text, View} from 'react-native';
import {Button, RoundedButton, TransparentButton} from '../../components/ui';
import {ApplicationStyles} from '../../themes';
import {ROUTES} from '../../utilities/constants';

export default class AuthScreen extends React.Component {
  render() {
    return (
      <View style={ApplicationStyles.screen.container}>
        <Text style={ApplicationStyles.logoTitle}>Gavano</Text>
        <Text style={ApplicationStyles.screen.sectionText}>
          Make your life carbon neutral.
        </Text>
        <RoundedButton label="Join now" onPress={this.goToJoinNow} />
        <TransparentButton
          label="Join with Google"
          onPress={this._signInAsync}
        />
        <Button label="Sign in" onPress={this.goToSignIn} />
      </View>
    );
  }

  goToJoinNow = () => {
    this.props.navigation.navigate(ROUTES.JOIN);
  };

  goToSignIn = () => {
    this.props.navigation.navigate(ROUTES.SIGNIN);
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate(ROUTES.APP);
  };
}
