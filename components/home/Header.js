import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
//import { SparklesIcon } from "react-native-heroicons/solid";

import {HeartIcon} from "react-native-heroicons/outline"
import {ChatBubbleLeftEllipsisIcon} from "react-native-heroicons/outline"
import {PlusCircleIcon } from "react-native-heroicons/outline"

export default function Header({navigation}) {
    return (
    <View style={styles.container}>
        <TouchableOpacity>
        <Image style={styles.logo} 
        source= {{
            uri:"https://i.pinimg.com/originals/d5/1d/09/d51d097fbbd5cdc277d80c605ad1c455.png"
            }} />
            </TouchableOpacity>

        <View style= {styles.iconsContainer}>
            
            <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
            <PlusCircleIcon  color="white" fill="black" size={30}/>
            </TouchableOpacity>

            <TouchableOpacity>
            <HeartIcon color="white" fill="black" size={30}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.unreadBadge} >
                    <Text style={styles.unreadBadgeText}>11</Text>
                </View>
                <ChatBubbleLeftEllipsisIcon color="white" fill="black" size={30}/>
                </TouchableOpacity>
        </View>
    </View>
    
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        marginHorizontal: 20,

    },
    iconsContainer: {
        flexDirection:"row",
        
    },
    logo:{
        width: 100,
        height: 50,
        resizeMode: "contain",
    },

    // icon:{
    //     width:30,
    //     height:30,
    //     marginLeft:10,
    //     resizeMode:"contain",
        
    // },

    unreadBadge: {
        backgroundColor: "#FF3250",
        position: "absolute",
        left: 20,
        bottom: 18,
        width: 25,
        height: 18,
        borderRadius: 25,
        alignItems:"center",
        justifyContent: "center",
        zIndex: 100,
    },

    unreadBadgeText:{
        color:"white",
        fontWeight:600,
    }
})