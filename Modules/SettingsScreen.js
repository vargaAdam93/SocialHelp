import React,{ Component } from 'react';
import {
    View, Text, StyleSheet,TouchableHighlight
} from 'react-native';

import { Button, Container, Header,Content, Left, Icon, Body, Title} from 'native-base'

class SettingsScreen extends Component {
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
                    <Body>
                        <Title>
                            Settings
                        </Title>
                    </Body>
                </Header>
                <Content contentContainerStyle={{
                    flex:1,
                    alignItems:'center',
                    justifyContent: 'center'
                }}>
                    <Text>Settings screen</Text>
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
export default SettingsScreen;