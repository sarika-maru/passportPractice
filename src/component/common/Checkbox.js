import React from 'react';
import CheckBox from 'react-native-checkbox';
import {View,Text} from 'react-native';

const Checkbox = ({label,isChecked,onChange,value})=>{
    console.log({value});
    const {containerStyle,labelStyle}=styles;
    return(
        <View style={containerStyle}>
            <CheckBox
                label={label}
                value={value}
                isChecked={isChecked}
                onChange={onChange(isChecked,value)}
            />
        </View>
    );
}
const styles={
    containerStyle:{
        height:40,
        width:60,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },labelStyle :{
        flex:1,
        fontSize:18,
        paddingLeft:5,
        paddingRight:5
    }
}
export {Checkbox};