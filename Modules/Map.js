import React,{Component} from 'react';
import {AppRegistry, Platform, StyleSheet, Text, View} from 'react-native';
import MapView,{ Marker} from 'react-native-maps';

export default class MyMap extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            markers: [{
                latlng: { latitude: 47.09327, longitude:17.91149},
                title: 'Alma',
                description: 'jó'}],
            myPosition: ''
        }
    }

    componentDidMount()
    {
        var that = this;
        navigator.geolocation.getCurrentPosition(position =>{
            //alert(Object.getOwnPropertyNames(position.coords));
            //alert(that.state);
            //alert(position);
            that.setState(
                {
                    myPosition: position
                }
            );
        }, err => {console.log(err)})
    }

    render() {
        if (this.state.myPosition === '') {
            return(
                <View style={styles_map.container}>
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
                             region={{
                                 latitude: 47.09327,
                                 longitude: 17.91149,
                                 latitudeDelta: 0.1,
                                 longitudeDelta: 0.1
                             }}>
                        <Marker
                            coordinate={myCoord}
                            pinColor={"green"}

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
    map:{
        position: 'absolute',
        top:0,
        left:0,
        bottom:0,
        right:0,
    }
});
