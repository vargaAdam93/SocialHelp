import React,{ Component } from 'react';
import {
    View, Text, StyleSheet,Button, Image, TouchableOpacity, Dimensions,TouchableHighlight
} from 'react-native';
import MyMap from './Map';

import {Container, Header, Content, Left, Icon, Body, Title} from 'native-base';
import Camera from "react-native-camera";

import QRCodeScanner from 'react-native-qrcode-scanner';

class HomeScreen extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            camera_pushed: false,
            qrcode: ''
        };
        this.handleCameraPushed = this.handleCameraPushed.bind(this);
        this.handleCameraCancelPushed = this.handleCameraCancelPushed.bind(this);
    }

    handleCameraPushed(event)
    {
        this.setState({
            camera_pushed: true
        });
    }

    handleCameraCancelPushed(event)
    {
        this.setState({
            camera_pushed: false
        });
    }

    onBarCodeRead = e => {
        alert(e.data);
        this.setState({ qrcode: e.data });
    };


    static navigationOptions = {
        drawerIcon: (<Text></Text>)
    };

    takePicture = async function() {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
        }
    };

    render(){
        //alert(this.state.logged_in);
        if(this.state.camera_pushed === true)
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
                                Places around me
                            </Title>
                        </Body>
                    </Header>
                    <Content contentContainerStyle={{
                        flex: 1,
                        alignItems: 'stretch',
                        justifyContent: 'flex-end'
                    }}>
                        <View style={styles_map.cam_container}>
                            <QRCodeScanner
                                onRead={this.onBarCodeRead}/>

                        </View>
                        <Button title="Cancel" onPress={this.handleCameraCancelPushed}  color="#841584"
                                accessibilityLabel="Learn more about this purple button"/>
                    </Content>
                </Container>

            );
        }
        return (
            <Container>
                <Header>
                        <Left>
                            <Icon name="ios-menu"
                                  onPress={()=> this.props.navigation.openDrawer()}
                            />
                        </Left>
                    <Body>
                        <Title>
                            Places around me
                        </Title>
                    </Body>
                </Header>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'stretch',
                    justifyContent: 'flex-end'
                }}>
                    <MyMap/>
                    <View style={{
                        flex: 1,
                        alignItems: 'stretch',
                        justifyContent: 'flex-end'
                    }}>
                        <Button title="Camera" onPress={this.handleCameraPushed}  color="#841584"
                                accessibilityLabel="Learn more about this purple button"/>
                    </View>
                </Content>

            </Container>

        )
    }
}

const styles_map = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    cam_container: {
        flex: 1,
        flexDirection: 'row',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    },
    button: {
        alignItems: 'flex-start',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
});
export default HomeScreen;