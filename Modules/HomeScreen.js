import React,{ Component } from 'react';
import {
    View, Text, StyleSheet, Button, Image, TouchableOpacity, Dimensions,TouchableHighlight
} from 'react-native';
import MyMap from './Map';

import {Container, Header, Content, Left, Icon, Body, Title} from 'native-base';
import Camera from "react-native-camera";

import QRCodeScanner from 'react-native-qrcode-scanner';
import QR_decode from './QR_decode';

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
        alert('Cupon with ' + e.data + ' succesfully read! \n Thank you for your donation!!!');
        this.setState({ qrcode: e.data,
                        camera_pushed: false
        });
    };

    ShowAlertWithDelay=() =>{
        let that = this;
        setTimeout(function () {
            let org_and_donation = {};
            for(let i in QR_decode)
            {
                if(QR_decode[i].key === that.state.qrcode )
                {
                    org_and_donation = QR_decode[i].value;
                }
            }
            alert('Your ' + org_and_donation.donation + '  donation has arrived to ' +org_and_donation.to + ' !');
            that.setState({qrcode: ""});
        },10000);
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
        if(this.state.qrcode !=="")
        {
            this.ShowAlertWithDelay();
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