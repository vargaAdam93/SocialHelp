import React,{ Component } from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';
import MyMap from './Map';

import {Icon, Button, Container, Header,Content, Left} from 'native-base'

class HomeScreen extends Component {

    static navigationOptions = {
        drawerIcon: (<Icon name='ios-home'/>)
    };
    render()
    {
        return(
            <Container>
                <Header>
                    <Left>
                        <Icon name="ios-menu"
                              onPress={()=> this.props.navigation.openDrawer()}
                        />
                    </Left>
                </Header>
                <Content contentContainerStyle={{
                    flex:1,
                    alignItems:'center',
                    justifyContent: 'center'
                }}>
                    <MyMap/>
                </Content>
            </Container>
        )
    }
}
export default HomeScreen;