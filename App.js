/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { Container, Content, Header,Body, Icon } from 'native-base'


import { DrawerNavigator, DrawerItems } from 'react-navigation'
import HomeScreen from '../FrontEnd/Modules/HomeScreen'
import SettingsScreen from '../FrontEnd/Modules/SettingsScreen'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    render() {
        return (
        <MyApp/>
            );
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
        }
    }
);
