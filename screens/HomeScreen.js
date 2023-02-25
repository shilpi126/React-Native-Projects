import React from 'react'
import { View, Text, SafeAreaView,  ScrollView, StyleSheet } from 'react-native'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Post from '../components/home/Post'
import { POSTS } from '../data/Posts'
import BottomTabs from '../components/home/BottomTabs'




export default function HomeScreen({navigation}) {
    return (
        <SafeAreaView  style={styles.container}>
            <Header  navigation={navigation}/>
            <Stories/>
            <ScrollView>
                {POSTS.map((post, index) => (
                    <Post post={post} key={index}/>
                ))}
            </ScrollView>
            <BottomTabs/>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex:1,
    },
  })
