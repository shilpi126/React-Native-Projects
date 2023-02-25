import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import FormikPostUploader from './FormikPostUploader'



const AddNewPost = ({navigation}) => {
  return (
   <View style={styles.container}>
    <Header navigation={navigation}/>
    <FormikPostUploader navigation={navigation}/>
   </View>
  )
}


const Header = ({navigation}) => (
  <View style={styles.headerContainer}>

  <TouchableOpacity onPress={() => navigation.goBack()}>
  <ChevronLeftIcon color="white" fill="black" size={30}/>
  </TouchableOpacity>
  
  <Text style={styles.headerText}>NEW POST</Text>
  <Text></Text>
</View>
)

const styles = StyleSheet.create({
  container:{
    marginHorizontzl:10
  },
  headerContainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  headerText:{
    color: "#fff",
    fontWeight:"700",
    fontSize:20,
    marginRight:25
  }
})

export default AddNewPost