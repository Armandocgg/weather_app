import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, KeyboardAvoidingView, ImageBackground } from 'react-native';
import SearchInput from  './src/components/SearchInput'
import imageBackground from './assets/bg/clear.png'
export default class App extends React.Component {
  state = { 
    text: '',
    location: ''
  }
  
  _handleChangeText = (text) => { this.setState({ text })
  }

  _handleSubmit = () => {
    const { text } = this.state

    if ( !text ){
      return
    }else {
      this.setState({ location: text })
      this.setState({ text: '' })
      console.log(text)
    }
  }

  render() {
    const { location } = this.state
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <ImageBackground
          source={imageBackground}
          style={styles.imageBackground}
        >
          <Text style={[styles.lasgeText, styles.textStyle]}>{location}</Text>
          <Text style={[styles.smallText, styles.textStyle]}>Clear</Text>
          <Text style={[styles.lasgeText, styles.textStyle]}>15º</Text>
          <SearchInput 
            placeholder="Search a Cool City"
            handleChangeText={ this._handleChangeText }
            value= { this.state.text }
            onSubmit= { this._handleSubmit }
          />
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  imageBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
