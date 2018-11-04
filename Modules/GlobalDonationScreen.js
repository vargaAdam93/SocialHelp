import React,{ Component } from 'react';
import {
    View, Text, StyleSheet, TouchableHighlight
} from 'react-native';

import {Container, Header,Content, Left, Right} from 'native-base'

class GlobalDonationScreen extends Component {
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
                    <Text>Global donation</Text>
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
export default GlobalDonationScreen;