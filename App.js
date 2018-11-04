/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button} from 'react-native';
import { Container, Content, Header,Body, Icon } from 'native-base'


import { DrawerNavigator, DrawerItems } from 'react-navigation'
import HomeScreen from './Modules/HomeScreen'
import SettingsScreen from './Modules/SettingsScreen'
import MyDonationScreen from './Modules/MyDonationScreen'
import GlobalDonationScreen from './Modules/GlobalDonationScreen'
import MyCouponScreen from './Modules/MyCouponScreen'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    constructor(props)
    {
        super(props);
        this.state= {
            logged_in: false
        };
        this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
        this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
    }

    handleFacebookLogin(event)
    {
        this.setState({
            logged_in: true
        });
    }

    handleGoogleLogin(event)
    {
        this.setState({
            logged_in:true
        });
    }

    render() {
        if(this.state.logged_in === false)
        {
            return(
                <View style={styles.container}>
                    <Image source={require('./Modules/Pictures/slide-logo.png')} />

                    <Button title="Facebook login" onPress={this.handleFacebookLogin}  color="#841584"
                            accessibilityLabel="Learn more about this purple button"/>
                    <Button title="Google login" onPress={this.handleGoogleLogin}  color="#841584"
                            accessibilityLabel="Learn more about this purple button"/>
                </View>
            )
        }
        else {
            return (
                <MyApp/>
            );
        }
      }
}

const CustomDrawerContentComponenet = (props) =>(
    <Container>
        <Header style={{height:200}}>
            <Body>
                <Image
                    style = {styles.drawerImage}
                    source = {require('./Modules/Pictures/slide-logo.png')}
                />
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props}/>
        </Content>
    </Container>
);


const MyApp = DrawerNavigator({
    Home:{ screen: HomeScreen },
    MyCoupons: {screen: MyCouponScreen},
    MyDonations: {screen: MyDonationScreen},
    GlobalDonations: {screen: GlobalDonationScreen},
    Settings: {screen: SettingsScreen}

},{
    initialRouteName: 'Home',
    contentComponent: CustomDrawerContentComponenet,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'

});

styles = StyleSheet.create(
    {
        drawerImage:{
            height: 150,
            width:150,
            borderRadius: 75
        },
        container: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            justifyContent: 'space-between',
            alignItems: 'center',
        },
    }
);
