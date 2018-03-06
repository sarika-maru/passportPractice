import React from 'react';
import {TextInput,View ,Text} from 'react-native';

const Input=({label,onChangeText,value,placeholder,secureTextEntry})=>{
    const {InputStyle,labelStyle,containerStyle} =styles;
    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                value={value}
                onChangeText ={onChangeText}
                style ={InputStyle}
            />
        </View>
    );
}
const styles={
    InputStyle:{
        color : '#000',
        paddingRight:5,
        paddingLeft:5,
        fontSize:18,
        lineHeight:23,
        flex:2,
        height:20,
        width:100,
    },
    labelStyle :{
        flex:1,
        fontSize:18,
        paddingLeft:20,
        paddingRight:5
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    }
}
export {Input};