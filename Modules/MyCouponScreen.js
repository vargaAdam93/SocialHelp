import React,{ Component } from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';

import {Icon, Button, Container, Header,Content, Left} from 'native-base'

class MyCouponScreen extends Component {
    static navigationOptions = {
        drawerIcon: (<Icon name='settings'/>)
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
                    <Text>My coupon screen</Text>
                </Content>
            </Container>
        )
    }
}
export default MyCouponScreen;