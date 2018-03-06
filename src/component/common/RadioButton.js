import React,{Component} from 'react';
import {View,Text} from 'react-native';
import RadioButton from 'react-native-simple-radio-button';

const  MyRadiobutton =({label,onPress,radio_props})=>{
    return (
        <View>
            <Text style={styles.textStyle} >
                {label}
            </Text>
            <RadioButton
                radio_props={radio_props}
                style={styles.RadioButtonStyle}
                initial={0}
                onPress={onPress}
                formHorizontal={true}
                buttonColor={'#2196f3'}
                animation={false}
            >
            </RadioButton>
        </View>
    );

}
const styles = {
        RadioButtonStyle:{
            paddingLeft:130

        },
        textStyle:{
            paddingLeft:20,
            paddingRight:5,
            fontSize :18,

        }

}

export {MyRadiobutton}