import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { Divider } from '@rneui/themed';
import { EnvelopeOpenIcon, FilmIcon, HomeIcon, MagnifyingGlassIcon, PlusCircleIcon } from 'react-native-heroicons/outline';



const BottomTabs = () => {
  
  
  return (
    
    <View style={styles.wrapper}>
      <Divider width={1} color="white" orientation="horizontal"/>
      
    <View style={styles.container}>
      <TouchableOpacity  >
      <HomeIcon color="white" fill="black" size={30} />
      </TouchableOpacity>

      <TouchableOpacity >
      <MagnifyingGlassIcon  color="white" fill="black" size={30} /> 
      </TouchableOpacity>

      <TouchableOpacity >
      <FilmIcon  color="white" fill="black" size={30}/>
      </TouchableOpacity>

      <TouchableOpacity >
      <EnvelopeOpenIcon  color="white" fill="black" size={30}/>
      </TouchableOpacity>

      <TouchableOpacity>
        <Image  style={styles.profilePic} 
        source= {{
            
            uri:("https://th.bing.com/th/id/OIP.jryuUgIHWL-1FVD2ww8oWgHaHa?w=191&h=191&c=7&r=0&o=5&pid=1.7")
            }} />
      </TouchableOpacity>

    
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
  wrapper:{
    position: "absolute",
    position:"sticky",
    width: "100%",
    bottom: "3%",
    zIndex:999,
    backgroundColor:"#000"
  },
  container:{
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
 profilePic : {
  width: 30,
  height: 30,
  borderRadius:50,
  backgroundColor:"#fff",
  border: "2px solid orange"
  //borderColor: "#ff8501",
 },

})
export default BottomTabs