import React,{Component} from 'react';
import {View,Text,Alert} from 'react-native';
import {CardSection,Card,Input,MyRadiobutton,Button,MyDropDown} from './common';


class UserRegForm extends Component{
    state={username:'',password:'',gender:'',city:''};

    onButtonPress(){
        fetch('http://localhost:8888/UserRegForm',{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                gender: this.state.gender,
                city: this.state.city
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
                        label="UserName"
                        placeholder="user@gmail.com"
                        value={this.state.username}
                        onChangeText={username=>{this.setState({username})}}
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
                    <MyRadiobutton
                        onPress={(value) => {
                            this.setState({gender:value})}}
                        radio_props={[
                            {label: 'Male', value: 'male'},
                            {label: 'Female', value: 'female' }]}
                        label={'Gender'}
                    />
                </CardSection>

                    <MyDropDown
                        label={"City"}
                        data={[
                            {value:"surat"},
                            {value:"Baroda"}
                        ]}
                        onChangeText={(value)=>{this.setState({city : value})}}
                    />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Register</Button>
                </CardSection>

            </Card>
        )
    }
}

export default UserRegForm