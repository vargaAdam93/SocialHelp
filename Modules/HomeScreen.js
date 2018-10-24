import React,{ Component } from 'react';
import {
    View, Text, StyleSheet,Button
} from 'react-native';
import MyMap from './Map';

import {Icon, Container, Header, Content, Left} from 'native-base'

class HomeScreen extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            logged_in: false
        };
        this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
    }

    handleFacebookLogin(event)
    {
        alert("button pushed");
        this.setState({
            logged_in: true
        });
    }


    static navigationOptions = {
        drawerIcon: (<Icon name='ios-home'/>)
    };
    render()
    {
        //alert(this.state.logged_in);
        if(this.state.logged_in === false)
        {
            return(
                <View style={styles_map.container}>
                    <Button title="Facebook login" onPress={this.handleFacebookLogin}  color="#841584"
                            accessibilityLabel="Learn more about this purple button"/>
                </View>
            )
        }
        else {

            return (
                <Container>
                    <Header>
                        <Left>
                            <Icon name="ios-menu"
                                  onPress={() => this.props.navigation.openDrawer()}
                            />
                        </Left>
                    </Header>
                    <Content contentContainerStyle={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <MyMap/>
                    </Content>
                </Container>
            )
        }
    }
}

const styles_map = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    }
});
export default HomeScreen;