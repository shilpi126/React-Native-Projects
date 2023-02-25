import { View,  StyleSheet } from 'react-native'
import React from 'react'

import SignedInStack from './Navigation'

export default function App() {
  return (
    <View style={styles.container}>
        
        <SignedInStack/>
        
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
      backgroundColor: "black",
      flex:1,
  },
})