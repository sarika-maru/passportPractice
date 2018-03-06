import React from 'react';
import {View} from 'react-native';
import {Checkbox} from "./common";

class Emp extends Component{
    state ={name:'',department:'',dob:'',city : '',hobby:'',isChecked:false};
    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="sarika"
                        value={this.state.name}
                        onChangeText={name=>this.setState({name})}
                    />
                </CardSection>

                <CardSection>
                    <Checkbox
                        label:"Music"
                        value = {this.state.hobby}
                        checked={false}
                        OnChange={hobby=>this.setState({hobby})}
                    />
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Sign In</Button>
                </CardSection>
            </Card>
        );
    }
}

export default Emp;