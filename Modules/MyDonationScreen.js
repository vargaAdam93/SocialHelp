import React,{ Component } from 'react';
import {
    View, Text, StyleSheet,TouchableHighlight, Alert, Share,FlatList
} from 'react-native';

import { Button, Container, Header,Content, Left, Body, Icon, Title} from 'native-base'

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
                    <Left>
                        <Icon name="ios-menu"
                              onPress={()=> this.props.navigation.openDrawer()
                              }
                        />
                    </Left>
                    <Body>
                        <Title>
                            My Donations
                        </Title>
                    </Body>
                </Header>
                <Content contentContainerStyle={{
                    flex:1,
                    alignItems:'center',
                    justifyContent: 'center'
                }}>
                    <FlatList
                        data={[
                            {key: 'Place name 1', date:"2018-09-12", donation: '500 HUF'},
                            {key: 'Place name 2', date:"2018-09-13", donation: '800 HUF'},
                            {key: 'Place name 1', date:"2018-09-14", donation: '600 HUF'},
                        ]}
                        renderItem={({item}) => <Text style={styles.item}>
                                                    In {item.key} at {item.date}:{"\n"}
                                                    <Text style={{color: 'red'}}>
                                                        {item.donation}
                                                    </Text>.
                                                </Text>}
                    />
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
    item: {
        padding: 0,
        fontSize: 14,
        height: 64,
    },
});
export default MyDonationScreen;