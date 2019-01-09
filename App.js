import React from 'react';
import { StyleSheet, Text, View, Platform, TextInput, KeyboardAvoidingView, ImageBackground } from 'react-native';
import SearchInput from  './src/components/SearchInput'
import imageBackground from './assets/bg/clear.png'

import { fetchLocationId, fetchWeatherById } from './src/api'

export default class App extends React.Component {
  state = { 
    text: '',
    location: '',
    weather: '',
    temperature: ''
  }
  
  _handleChangeText = (text) => { this.setState({ text })
  }

  _handleSubmit =  async () => {
    const { text } = this.state

    if ( !text ){
      return
    }else {
      this.setState({ location: text })
      this.setState({ text: '' })

      const locationData =  await fetchLocationId( text )
      const woeid = locationData[0].woeid
      const weatherData = await fetchWeatherById( woeid )

      const { weather, temperature } = weatherData
      this.setState({ weather, temperature })
    }
  }

  render() {
    const { location, weather, temperature  } = this.state
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <ImageBackground
          source={imageBackground}
          style={styles.imageBackground}
        >
          <Text style={[styles.lasgeText, styles.textStyle]}>{ location }</Text>
          <Text style={[styles.smallText, styles.textStyle]}>{ weather }</Text>
          <Text style={[styles.lasgeText, styles.textStyle]}>{ Math.round(temperature) }º</Text>
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
