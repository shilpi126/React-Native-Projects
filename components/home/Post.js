import { View, Text, StyleSheet , Image, TouchableOpacity} from 'react-native'
import React from 'react'

import { Divider } from '@rneui/themed';
import {HeartIcon, PaperAirplaneIcon, BookmarkIcon } from "react-native-heroicons/outline"
import {ChatBubbleOvalLeftIcon} from "react-native-heroicons/outline"


const postFooterIcons = [
    {
        name:"like",
        imageUrl:"https://www.shutterstock.com/image-vector/isolated-like-financials-draw-digital-600w-1877682070.jpg",
        likedImageUrl: "https://www.shutterstock.com/image-vector/isolated-like-financials-draw-digital-600w-1877682070.jpg"
    }
    ,
    {
        name:"Comment",
        imageUrl:"https://www.shutterstock.com/image-vector/isolated-like-financials-draw-digital-600w-1877682070.jpg",
    },
    {
        name:"Save",
        imageUrl:"https://www.shutterstock.com/image-vector/isolated-like-financials-draw-digital-600w-1877682070.jpg",
    },
    {
        name:"Share",
        imageUrl:"https://www.shutterstock.com/image-vector/isolated-like-financials-draw-digital-600w-1877682070.jpg",
    }
]


export default function Post({post}) {
    // const { theme } = useTheme();
    return (
        <View style={{marginBottom : 30}}>
        
            <Divider width={1} color="white" orientation="horizontal"/>
            <PostHeader post={post}/>
            <PostImage post={post}/>
            <View style={{marginHorizontal:15, marginTop: 10}}>
            <PostFooter/>
            <Likes post={post}/>
            <Caption post={post}/>
            <CommentsSection post={post}/>
            <Comments post={post}/>
            </View>
    </View>
    )
}


const PostHeader = ({post}) => (
    
    <View style={{
    flexDirection: "row",
    justifyContent: "space-between",
    margin:5,
    alignItems:"center",
    }}>
        <View style={{flexDirection:"row", alignItems:"center"}}>
            <Image source={{uri:post.profile_picture}} style={styles.story}/>
            
            <Text style={{color:"white", marginLeft:5, fontWeight:700}}>{post.user}</Text> 
        </View>
        <Text style={{color: "white", fontWeight: "900"}}>...</Text>
    </View>
)


const PostImage = ({post}) => (
    <View style={{width:"100%",
    height:400}}>
    <Image source={{uri: post.imageUrl}}
    style={{height:"100%", resizeMode: "cover"}}/>
    </View>
    
)

const PostFooter = () => (
    <View style={{flexDirection:"row"}}>
        <View style={styles.leftFooterIconsContainer}>
        <TouchableOpacity>
            <HeartIcon color="white" fill="black" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <ChatBubbleOvalLeftIcon color="white" fill="black" size={30}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareIcon}>
            <PaperAirplaneIcon color="white" fill="black" size={30}/>
        </TouchableOpacity>

        {/* <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl}/>
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl}/>
        <Icon imgStyle={[styles.footerIcon, styles.shareIcon]} imgUrl={postFooterIcons[2].imageUrl}/>
     */}
    </View>
        <View style={{flex:1, alignItems:"flex-end"}}>
            {/* <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl}/> */}
            <TouchableOpacity>
            <BookmarkIcon color="white" fill="black" size={30}/>
            </TouchableOpacity>
        </View>
    </View>
)

// const Icon = ({imgStyle, imgUrl}) => (
//     <TouchableOpacity>
//         <Image style={imgStyle} source={{uri: imgUrl}}/>
//     </TouchableOpacity>
// )

const Likes = ({post}) => (
    <View style={{flexDirection:"row", marginTop:4}}>
    <Text style={{color:"white", fontWeight:"600"}}>
        {post.likes.toLocaleString("en")} likes</Text>
    </View>
)

const Caption = ({post}) => (
    <View style={{marginTop:5}}>
    <Text style={{color:"white"}}>
        <Text style={{ fontWeight:"600"}}>{post.user}</Text>
        <Text style={{marginLeft:10}}>{post.caption}</Text>
    </Text>
    </View>
    
)

const CommentsSection = ({post}) => (
    <View style={{marginTop: 5}}>
        {post.comments.length && (
            <Text style={{color:"gray"}}>
            View {post.comments.length > 1 ? " all " : " "}{post.comments.length }{" "}
            {post.comments.length > 1 ? "comments" : "comment"}</Text>
        )}
        </View>
)
//1) 0 comment don't render component.
//2) 1 cooment render component without "all" and singular comment.
//3) 2 comments render component with "all" and plural comments.

const Comments = ({post}) => (
    <>
    {post.comments.map((comment, index) => (
        <View key={index} style={{flexDirection: "row", marginTop:5}}>
            <Text style={{color:"white"}}>
                <Text style={{ fontWeight:"600" }}>{comment.user}</Text>{"  "}
                {comment.comment}
            </Text>
        </View>
    ))}
    </>
)

const styles = StyleSheet.create({
    story: {
        width:35,
        height:35,
        borderRedius:50,
        marginLeft: 6,
        borderWidth:1.6,
        borderColor: "#ff8501",
        borderRadius:50

    },

    footerIcon:{
        width:33,
        height:33
    },

    shareIcon: {
        transform:[{rotate: "320deg"}],
        marginTop: -3
    },

    leftFooterIconsContainer:{
        flexDirection:"row",
        width:"32%",
        justifyContent:"space-between"
    }
})