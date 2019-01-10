import React from 'react';
import { StyleSheet, Text, Platform,  KeyboardAvoidingView, ActivityIndicator,ImageBackground } from 'react-native';
import SearchInput from  './src/components/SearchInput'
import { fetchLocationId, fetchWeatherById } from './src/api'

import getWeatherBackground from './src/utils/getWeatherBackground'

export default class App extends React.Component {
  state = { 
    text: '',
    city: '',
    weather: '',
    temperature: '',
    isLoading: false,
    error: false
  }

  componentWillMount () {
    this._searchWeather("San Francisco")
  }
  
  _handleChangeText = (text) => { this.setState({ text }) }

  _handleSubmit = () => {
    const { text } = this.state
    if ( !text )return
    this._searchWeather( text )
    this.setState({ text: '' })
  }

  _searchWeather = async ( location ) => {
    try{
      this.setState({ isLoading: !this.state.isLoading })
      const locationData =  await fetchLocationId( location )
      const woeid = locationData[0].woeid

      const weatherData = await fetchWeatherById( woeid )
      const { weather, temperature, city } = weatherData
      this.setState({ weather, temperature, city, isLoading: false, error: false })
    }catch(error){
      console.log(error)
      this.setState({
        error: true,
        isLoading: false
      })
    }
  }

  render() {
    const {  city, weather, temperature, isLoading, error  } = this.state
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <ImageBackground
          source={getWeatherBackground(weather)}
          style={styles.imageBackground}
        >
          {
            isLoading 
            ? <ActivityIndicator size="large"/>
            : (
                error
                ? <Text style={[styles.smallText, styles.textStyle]}>Nojoda lo Dañaste</Text>
                : <React.Fragment>
                    <Text style={[styles.lasgeText, styles.textStyle]}>{ city }</Text>
                    <Text style={[styles.smallText, styles.textStyle]}>{ weather }</Text>
                    <Text style={[styles.lasgeText, styles.textStyle]}>{ Math.round(temperature) }º</Text>
                  </React.Fragment>
            )

          }
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
