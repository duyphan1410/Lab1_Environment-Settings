import React from "react";
import { View,Button, Alert,TouchableOpacity,Text, StyleSheet    } from "react-native";

const MyStyle = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center'
        }, 
        button:{
            backgroundColor: 'blue',
            marginTop:100,
            alignItems:'center',
            padding:10,
            width: 'auto',
            height:50
        },
        text:{
            color:'white',
            fontSize: 18
        }
    }
)


export default () => {
    return (
        <View>
            <Button title="Button 1" onPress={()=>alert('Hello 1')}></Button>
            <TouchableOpacity style={MyStyle.button} onPress={()=>alert('Hello 2')}>
                <Text style={MyStyle.text}>Button 2</Text>
            </TouchableOpacity>
        </View>
    )
}