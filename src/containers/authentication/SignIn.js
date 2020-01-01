import React from 'react';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {GenericInput} from '../../components/ui';

export default class SignInScreen extends React.Component {
  state = {email: ''};

  handleEmailChange = email => {
    this.setState({email});
  };

  render() {
    return (
      <View style={styles.container}>
        <GenericInput
          onChangeText={this.handleEmailChange}
          value={this.state.email}
          label="Email"
        />
        <TouchableOpacity
          style={styles.signInButton}
          onPress={this._signInAsync}>
          <Text style={styles.buttonText}>Sign in!</Text>
        </TouchableOpacity>
      </View>
    );
  }

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
  },
  signInButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    backgroundColor: '#007BFF',
    padding: 15,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
});
