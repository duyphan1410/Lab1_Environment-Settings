import React from "react";
import { View, Alert,TouchableOpacity,Text, StyleSheet    } from "react-native";

const Button = (props) => (
    <TouchableOpacity onPress={props.onPrees}
    style={{
        backgroundColor: '#ff637c',
        alignSelf:'center',
        padding:10,
        margin:10,
        ...props.buttonStyle,
    }}>
        <Text style={{color:'#fff'}}>{props.text}</Text>
    </TouchableOpacity>
)

export default () => {
    return (
        <View>
        <Button text="Say hello" onPrees={()=>alert('hello!')}/>
        <Button text="Say goodbye" onPrees={()=>alert('goodbye!')} buttonStyle={{backgroundColor:'#4dc2c2'}}/>
        </View>
    )
}