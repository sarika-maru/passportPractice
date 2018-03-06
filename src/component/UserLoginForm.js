import React,{Component} from 'react';
import {View,Text,Alert} from 'react-native';
import {Button,Card,CardSection,Input,Checkbox} from "./common";

class UserForm extends Component {
   state ={username :'', password : ''};

   onButtonPress()
   {
        fetch('http://localhost:8888/UserLoginForm',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        }).then((response)=>response.json())
            .then((responseJson)=>{
                Alert.alert(responseJson);
            }).catch((err)=>{
                console.log(err);
        });

   }

    render(){
        return(
                <Card>
                    <CardSection>
                        <Input
                            label="Email"
                            placeholder="user@gmail.com"
                            value={this.state.username}
                            onChangeText={username=>this.setState({username})}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            secureTextEntry
                            label="Password"
                            placeholder="Password"
                            value={this.state.password}
                            onChangeText={password=>this.setState({password})}
                        />
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>Sign In</Button>
                    </CardSection>
                </Card>

        )
    }


}
export default UserForm;