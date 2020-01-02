import React from 'react';
import {AsyncStorage, StyleSheet, Text, View} from 'react-native';
import {Button, RoundedButton, TransparentButton} from '../../components/ui';
import {ApplicationStyles} from '../../themes';

export default class AuthScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
    this.props.navigation.navigate('Join');
  };

  goToSignIn = () => {
    this.props.navigation.navigate('SignIn');
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});
