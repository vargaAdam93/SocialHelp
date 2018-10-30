import React,{ Component } from 'react';
import {
    View, Text, StyleSheet,TouchableHighlight, Alert
} from 'react-native';

import { Button, Container, Header,Content, Left} from 'native-base'

class MyDonationScreen extends Component {
    static navigationOptions = {
        drawerIcon: (<Text></Text>)
    };

    shareFacebook= ()=>({
        //TODO: Share on Facebook
    });
    render()
    {
        Alert.alert(
            "Your donation has arrived",
            "Congratulation! Your previous donation has arrived at its destination.",
            [
                {text: "Ok", onPress: () => console.log("OK pressed") },
                {text: "Share it on Facebook", onPress: this.shareFacebook()}
            ]
        );
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
                    <Text>My previous and awaiting donations</Text>
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
export default MyDonationScreen;