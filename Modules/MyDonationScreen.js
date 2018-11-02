import React,{ Component } from 'react';
import {
    View, Text, StyleSheet,TouchableHighlight, Alert, Share
} from 'react-native';

import { Button, Container, Header,Content, Left} from 'native-base'

class MyDonationScreen extends Component {
    static navigationOptions = {
        drawerIcon: (<Text></Text>)
    };
    constructor(props) {
        super(props);
        this.shareFacebook = this.shareFacebook.bind(this);
    }

    shareFacebook() {
        Share.share({
        message: 'Share',
        url: 'www.index.hu',
        title: 'Share achievement'
        }).then(result=> alert(result))
    };

    render()
    {
        const onSharePressHandler = () =>{
            this.shareFacebook()
        };
        Alert.alert(
            "Your donation has arrived",
            "Congratulation! Your previous donation has arrived at its destination.",
            [
                {text: "Ok", onPress: () => console.log("OK pressed") },
                {text: 'Share', onPress: onSharePressHandler}
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