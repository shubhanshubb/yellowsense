import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import StackNav from './src/navigaton/StackNav'

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StackNav />
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create ({
  container:{
    flex: 1,
    borderStartColor: '#000'
  }
})

export default App