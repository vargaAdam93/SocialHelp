import React,{ Component } from 'react';
import {
    View, Text, StyleSheet,TouchableHighlight
} from 'react-native';

import { Button, Container, Header,Content, Left, Icon, Body} from 'native-base';

class MyCouponScreen extends Component {
    static navigationOptions = {
        drawerIcon: (<Text></Text>)
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
                    <Body/>
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
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
});
export default MyCouponScreen;