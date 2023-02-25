import { View, Text, TextInput,  StyleSheet, Pressable, Alert } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import * as Yup from "yup"
import {Formik} from "formik"
import Validator from "email-validator"

import auth from '../../firebase'
import {  signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();


const LoginForm = ({navigation}) => {
    const loginFormSchema = Yup.object().shape({
        email:Yup.string().email().required("An email is required"),
        password: Yup.string().required().min(6, "Your password has to have at least 8 characters")
    
    })

    const onLogin = async (email, password) => {
        try{
            await signInWithEmailAndPassword(auth, email, password)
            console.log("Log In Successfully", email, password);
            // Alert.alert("Welcom To Instagram")
        }catch(error){
            // console.error(error.message);
            Alert.alert(
                "My Lord...",
                error.message + "\n\n... What would you like to do next",
                [
                    {
                        text: "OK",
                        onPress: () => console.log("OK"),
                        style: "cancle",
                    },
                    
                    {
                    text: "Sign Up ",
                    onPress: () => navigation
                    .push("SignupScreen")
                    }
                ]
                )
        }

        
    }

    return (
    <View style={styles.wrapper}>
        <Formik
        initialValues={{email:"", password: ""}}
        onSubmit={values => {
            //console.log(values);
            onLogin(values.email, values.password)
        }}
        validationSchema={loginFormSchema}
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

        <View style={[// dynamic style in array.
            styles.inputField,
            {borderColor:values.email.length < 1 || Validator.validate(values.email) ? "#ccc" : "red"}
        ]}>

        <TextInput
        placeholderTextColor="#444"
        placeholder='Phone number, username or email'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='emailAddress'
        autoFocus={true}
        onChangeText={handleChange("email")}
        onBlur={handleBlur("email")}
        value={values.email}
        />
        </View>

        <View style={[
            styles.inputField ,
            {borderColor: 1 > values.password.length || values.password.length >= 6 ? "#ccc" : "red"}
        ]
        
        }>
        <TextInput 
            placeholderTextColor="#444"
            placeholder='Password'
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
        />
        </View>

        <View style={{alignItems:"flex-end", marginBottom:30}}>
            <Text style={{color:"#6BB0F5"}}>Forgot password?</Text>
        </View>
        
        <Pressable 
        titleSize={20} 
        style={styles.button(isValid)}
        onPress={handleSubmit}
        disabled={!isValid}
        >
            <Text style={styles.buttonText}>Log In</Text>
        </Pressable>

        <View style={styles.signupContainer}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.push("SignupScreen")}>
                <Text style={{color:"#6BB0F5"}}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        </>
        )}
        </Formik>
    </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        marginTop:80,
    },
    inputField:{
        borderRedius:4,
        padding:12,
        backgroundColor: "#FAFAFA",
        marginBottom:10,
        borderWidth:1,
    },
    
    button:isValid => ({
        backgroundColor:isValid? "#0096F6" : "#9ACAF7",
        alignItems:"center",
        justifyContent:"center",
        minHeight:42,
        borderRadius:4,
    }),

    buttonText:{
        fontWeight:"600",
        color:"#fff",
        fontSize:20,
    },
    
    signupContainer:{
        flexDirection:"row",
        width:"100%",
        justifyContent:"center",
        marginTop:50
    }

})

export default LoginForm