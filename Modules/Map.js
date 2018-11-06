import React,{Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';
import MapView,{ Marker} from 'react-native-maps';

export default class MyMap extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            markers: [{
                latlng: { latitude: 1.29027, longitude:103.85195},
                title: 'Singapore',
                description: 'Fintech Festival catering'},
                {
                    latlng: { latitude: 1.2898, longitude:103.8632},
                    title: 'Singapore',
                    description: 'Singapore Flyer'},
                {
                    latlng: { latitude: 1.33375199832 , longitude: 103.955354512},
                    title: 'Singapore EXPO',
                    description: 'Singapore EXPO Convention and Exhibition Center '}],
            myPosition: '',
            latitude: 0,
            longitude: 0,
            prevLatLong: {}
        }
    }

    componentDidMount()
    {
        navigator.geolocation.getCurrentPosition(position =>{

            const {latitude, longitude} = position.coords;
            this.setState(
                {
                    latitude,
                    longitude,
                    myPosition: position
                }
            );
        }, err => {console.log('Hiba ' + err.message)});
        this.watchID = navigator.geolocation.watchPosition(
            position => {
                const { latitude, longitude } = position.coords;
                const old_lat = this.state.latitude;
                const old_long = this.state.longitude;
                const oldCoordinate = {
                    old_lat,
                    old_long
                };
                this.setState({
                    latitude,
                    longitude,
                    prevLatLng: oldCoordinate,
                    myPosition: position
                })
            },
            error => console.log('Hiba ' + error.message),
            { timeout: 20000, maximumAge: 1000}
        );

    }

    getMapRegion = () =>({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    });
    render() {
        if (this.state.myPosition === '') {
            return(
                <View style={styles_map.loading_text}>
                    <Text>Loading GPS location</Text>
                </View>
            )
        }
        else {

            const myCoord = {latitude: this.state.myPosition.coords.latitude,
                             longitude: this.state.myPosition.coords.longitude};
            return (
                <View style={styles_map.container}>
                    <MapView style={styles_map.map}
                             region={this.getMapRegion()}
                             showsUsetLocation={true}
                             followsUserLocation={true}
                             loadingEnabled={true}>
                        <Marker
                            coordinate={myCoord}
                            pinColor={"green"}
                            title = "My position"
                        />
                        {this.state.markers.map(marker => (
                            <Marker
                                coordinate={marker.latlng}
                                title={marker.title}
                                description={marker.description}
                            />
                        ))}
                    </MapView>
                </View>
            )
        }
    }
}
const styles_map = StyleSheet.create({
    container: {
        position: 'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    loading_text: {
        flex:1,
        alignItems:'center',
        justifyContent: 'center'
    },
    map:{
        position: 'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
    }
});
