import React,{ Component } from 'react';
import {
    View, Text, StyleSheet,Button, Image, TouchableOpacity, Dimensions
} from 'react-native';
import MyMap from './Map';

import {Icon, Container, Header, Content, Left} from 'native-base';
import { RNCamera } from "react-native-camera";


class HomeScreen extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            logged_in: false,
            camera_pushed: false,
            qrcode: "",
            camera: ""
        };
        this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
        this.handleGoogleLogin = this.handleGoogleLogin.bind(this);
        this.handleCameraPushed = this.handleCameraPushed.bind(this);
    }

    handleFacebookLogin(event)
    {
        alert("button pushed");
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

    handleCameraPushed(event)
    {
        this.setState({
            camera_pushed: true
        });
    }

    onBarCodeRead = e => {
        this.setState({ qrcode: e.data });
    };


    static navigationOptions = {
        drawerIcon: (<Icon name='ios-home'/>)
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
                <View style={styles_map.container}>
                    <RNCamera
                        ref={ref => {
                            this.camera = ref;
                        }}
                        style = {styles_map.preview}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.off}
                        permissionDialogTitle={'Permission to use camera'}
                        permissionDialogMessage={'We need your permission to use your camera phone'}
                        onGoogleVisionBarcodesDetected={({ barcodes }) => {
                            alert(barcodes)
                        }}
                    />
                    <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
                        <TouchableOpacity
                            onPress={this.takePicture.bind(this)}
                            style = {styles_map.capture}
                        >
                            <Text style={{fontSize: 14}}> SNAP </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }

        if(this.state.logged_in === false)
        {
            return(
                <View style={styles_map.container}>
                    <Image source={require('./Pictures/slide-logo.png')} />

                    <Button title="Facebook login" onPress={this.handleFacebookLogin}  color="#841584"
                            accessibilityLabel="Learn more about this purple button"/>
                    <Button title="Google login" onPress={this.handleGoogleLogin}  color="#841584"
                            accessibilityLabel="Learn more about this purple button"/>
                </View>
            )
        }
        else {

            return (
                <Container>
                    <Header>
                        <Left>
                            <Icon name="ios-menu"
                                  onPress={() => this.props.navigation.openDrawer()}
                            />
                        </Left>
                    </Header>
                    <Content contentContainerStyle={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <MyMap/>
                    </Content>
                    <View style={{
                        flex: 1,
                        alignItems: 'stretch',
                        justifyContent: 'flex-end'
                    }}>
                        <Button title="Camera" onPress={this.handleCameraPushed}  color="#841584"
                                accessibilityLabel="Learn more about this purple button"/>
                    </View>
                </Container>

            )
        }
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
    }
});
export default HomeScreen;