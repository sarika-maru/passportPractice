import React from 'react';
import {View,Text} from 'react-native';

const Header = (props)=>{
    return(
        <View style={Styles.ViewStyle}>
            <Text style={Styles.TextStyle}>{props.headerText}</Text>
        </View>
    );
}

 const Styles = {
    ViewStyle:{
        backgroundColor : '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height : 60,
        paddingTop: 15,
        shadowColor : '#000',
        shadowOffset: {width : 0, height:2},
        shadowOpacity: 0.2

    },TextStyle:{
        fontSize:20
     }
 }
export {Header} ;
