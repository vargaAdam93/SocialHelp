import React,{Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View, Dimensions, PermissionsAndroid} from 'react-native';
import MapView,{ Marker} from 'react-native-maps';
import Frei_coord from "./Frei_coord";

export default class MyMap extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            markers: Frei_coord,
            myPosition: '',
            prevLatLong: {},
            permissionState: false,
            latitude: null,
            longitude: null,
            error: null
        };
    }

    componentDidMount() {
        Platform.OS === 'android' && Platform.Version >= 22 ? this.requestMapPermission() : this.requestMap()
    }

    /*componentDidMount()
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

    }*/

    async requestMapPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Granted');
                this.watchId = navigator.geolocation.getCurrentPosition(
                    (position) => {
                        console.log('Position is watched');
                        this.setState({
                            permissionState: true,
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                            error: null,
                        });
                    },
                    (error) => this.setState({error: error.message}),
                    {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
                );

            } else {
                console.log('not Granted');
                this.setState({
                    permissionState: false,
                });
            }
        } catch (err) {
            console.warn(err)
        }
    }

    requestMap() {
        this.watchId = navigator.geolocation.watchPosition(
            (position) => {
                this.setState({
                    permissionState: true,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({error: error.message, permissionState: false,}),
            {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
        );
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    /*getMapRegion = () =>({
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    });*/
    render() {
        var {height, width} = Dimensions.get('window');
        return (
            <View style={styles_map.container}>
                {
                    this.state.permissionState === true ?
                        <MapView
                            showsUsetLocation={true}
                            followsUserLocation={true}
                            loadingEnabled={true}
                            style={styles_map.map}
                            region={{
                                latitude: this.state.latitude,
                                longitude: this.state.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421
                            }}>
                            <MapView.Marker
                                coordinate={{
                                    latitude: (this.state.latitude + 0.00000),
                                    longitude: (this.state.longitude + 0.00000),
                                }}
                                pinColor={"green"}
                                title = "My position"/>
                            {this.state.markers.map(marker => (
                                <MapView.Marker
                                    coordinate={marker.latlng}
                                    title={marker.title}
                                    description={marker.description}
                                />
                            ))}
                        </MapView>
                        :
                        <View style={styles_map.loading_text}>
                            <Text>Loading</Text>

                        </View>


                }

            </View>
        );
        /*if (this.state.myPosition === '') {
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
        }*/
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
