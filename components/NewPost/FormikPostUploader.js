import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import * as Yup from "yup"
import {Formik} from "formik"
import { Image } from 'react-native'
import { Divider } from '@rneui/themed'
import validUrl from "valid-url"

// import { Button } from '@rneui/themed/dist/Button'

 //"https://images.pexels.com/photos/1008000/pexels-photo-1008000.jpeg?auto=compress&cs=tinysrgb&w=400"
 const PLACEHOLDER_IMG ="https://th.bing.com/th?id=OIP.dxt2_gkvMt-3ZUVo8RF9SQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required("A URL IS REQUIRED"),
    caption: Yup.string().max(2200,"Caption has reached the character limit")
})

const FormikPostUploader = ({navigation}) => {
    const [thumbnailUrl , setThumbnailUrl] = useState(PLACEHOLDER_IMG)//placeholder image

    return (
    <Formik initialValues={{caption:"", imageUrl:""}}
    onSubmit={(value) => {

        console.log(value)
        console.log("Your post was submitted successfully")
        navigation.goBack()
    }}
    validationSchema={uploadPostSchema}
    validateOnMount={true}
    >
        {({
            handleBlur,
            handleChange,
            handleSubmit,
            values,
            errors,
            isValid,
        }) => (
            <>
            <View style={{margin:20, justifyContent:"space-between", flexDirection:"row"}}>
                <Image source={{uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : PLACEHOLDER_IMG}} style={{width:100, height:100}}/>
            
            <View style={{flex:1, marginLeft:12}}>
            <TextInput
            style={{color:"white", fontSize:20}} 
            placeholder='Write a caption...'
            placeholderTextColor="gray" 
            
            multiline={true}
            onChangeText={handleChange("caption")}
            onBlur={handleBlur("caption")}
            value={values.caption}
            />
            </View>
            </View>

            <Divider width={0.1} color="white" orientation="horizontal" />
            <TextInput 
            onChange={e => setThumbnailUrl(e.nativeEvent.text)}
            style={{color:"white", fontSize:18}}
            placeholder='Enter Image Url'
            placeholderTextColor="gray"
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
            />
            {errors.imageUrl && (
                <Text style={{fontSize:12, color:"red"}}>
                    {errors.imageUrl}
                </Text>
            )}

            <Button   onPress={handleSubmit} title="Share" disabled={!isValid}></Button>

            </>
        )}
    


    </Formik>
    )
}

export default FormikPostUploader

