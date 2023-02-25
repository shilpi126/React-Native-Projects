import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import LoginForm from '../components/loginScreen/LoginForm'



 const INSTAGRAM_LOGO = "https://th.bing.com/th?id=OIP.UjeNAks1q8Vp1WfhU8sU-gHaHZ&w=250&h=249&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
const LoginScreen = ({navigation}) => 

   (
    <View style={styles.container}>
        
      <View style={styles.logoContainer}>
        <Image source = {{uri:INSTAGRAM_LOGO, height:100, width: 100}}/>
       
      </View>
      <LoginForm navigation={navigation}/>
    </View>
  )

  const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        paddingTop:50,
        paddingHorizontal:12,
    },

    logoContainer:{
        alignItems:"center",
        marginTop:60
    }
  })


export default LoginScreen