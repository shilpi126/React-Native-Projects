import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import {USERS} from "../../data/Users"

export default function Stories() {
  return (
    <View style={{marginBottom: 13}}>
        <ScrollView 
        horizontal
        showHorizontalScrollIndicator={false}
        >
        {USERS.map((story, index) => (
            <View key={index} style={{alignItem: "center"}}>
            <Image source={{uri:story.image}}
            style={styles.story}
            />
            <Text style={{color:"white"}}>{
                story.user.length > 11 ? story.user.slice(0, 10)
                .toLowerCase() + "..." : story.user.toLowerCase()
            }
            </Text>
            </View>
        ))}
        </ScrollView>
        
    </View>
  )
}

const styles = StyleSheet.create({
    story: {
        width:70,
        height:70,
        borderRedius:50,
        marginLeft: 6,
        borderWidth:3,
        borderColor: "#ff8501",
        borderRadius:50

    }
})