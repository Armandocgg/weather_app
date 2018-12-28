'use strict'
import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import PropsTypes from 'prop-types'

function SearchInput({placeholder, handleChangeText, value, onSubmit}) {
  return (
    <TextInput 
      autoCorrect= {false}
      style={styles.textInput}
      autoFocus
      clearButtonMode="while-editing"
      placeholder={ placeholder }
      placeholderTextColor="black"
      returnKeyType="search"
      underlineColorAndroid="transparent"
      onChangeText={ handleChangeText }
      value={ value }
      onSubmitEditing= { onSubmit }
      // onChangeText={(text) => console.log(text)}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#00000033',
    width: 300,
    height: 40,
    marginTop: 20,
    borderRadius: 20,
    paddingHorizontal: 10,
    color: 'white',
    // elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
})

SearchInput.PropsTypes = {
  placeholder: PropsTypes.string.isRequired
}

export default SearchInput
