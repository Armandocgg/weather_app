import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, KeyboardAvoidingView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <Text style={[styles.lasgeText, styles.textStyle]}>San Francisco</Text>
        <Text style={[styles.smallText, styles.textStyle]}>Clear</Text>
        <Text style={[styles.lasgeText, styles.textStyle]}>15º</Text>
        <TextInput 
          autoCorrect= {false}
          style={styles.textInput}
          autoFocus
          clearButtonMode="while-editing"
          placeholder="Search any City"
          placeholderTextColor="#black"
          returnKeyType="search"
          underlineColorAndroid="transparent"
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lasgeText: {
    fontSize: 44
  },
  smallText: {
    fontSize: 18
  },
  textStyle: {
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto'
  },
  textInput: {
    backgroundColor: '#bdc3c7',
    width: 300,
    height: 40,
    marginTop: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  }
});
