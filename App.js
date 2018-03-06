import React, { Component } from 'react';
import { View } from 'react-native';
import {Header} from "./src/component/common";
import UserLoginForm from "./src/component/UserLoginForm";
import UserRegForm from "./src/component/UserRegForm";

class App extends Component{

  render(){

    return(
        <View>
          <Header headerText={"Registartion"}/>

         <UserLoginForm/>

        </View>
    );

  }
}

export default App;

