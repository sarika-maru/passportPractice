import React from 'react';
import {View,TouchableOpacity} from 'react-native';

const Link = ({children,onPress,style})=>{
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={style}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

export {Link}