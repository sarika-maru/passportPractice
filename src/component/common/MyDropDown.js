import React from 'react';
import {View,Text} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';

const MyDropDown =({label,data,onChangeText})=>{
    return(
        <View>
            <Dropdown
                label={label}
                data={data}
                onChangeText={onChangeText}
            />
        </View>
    )
}
const styles={
    labelStyle :{
        fontSize:18,
        paddingLeft:5,
        paddingRight:5
    },containerStyle:{
        height:40,

        flexDirection:'row',
        alignItems:'center'
    },dropdownStyle:{

        paddingRight:5,
        paddingLeft:5,
        width:25
    }
}
export {MyDropDown}