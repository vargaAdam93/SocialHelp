import React,{ Component } from 'react';
import {
    View, Text, StyleSheet,TouchableHighlight
} from 'react-native';

import { Button, Container, Header,Content, Left} from 'native-base'

class MyCouponScreen extends Component {
    static navigationOptions = {
        drawerIcon: (<Text></Text>)
    };

    render()
    {
        return(
            <Container>
                <Header>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={()=> this.props.navigation.openDrawer()}
                    >
                        <Text>Menu</Text>
                    </TouchableHighlight>
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
        alignItems: 'flex-start',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
});
export default MyCouponScreen;