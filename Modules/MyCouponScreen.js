import React,{ Component } from 'react';
import {
    View, Text, StyleSheet,TouchableHighlight, FlatList
} from 'react-native';

import { Button, Container, Header,Content, Left, Icon, Body, Title} from 'native-base';

class MyCouponScreen extends Component {
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
                            My coupons
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
                            {key: 'Place name 1', bydate:"2018-09-12", couponvalue: '500 HUF'},
                            {key: 'Place name 2', bydate:"2018-09-13", couponvalue: '800 HUF'},
                            {key: 'Place name 3', bydate:"2018-09-14", couponvalue: '600 HUF'},
                        ]}
                        renderItem={({item}) => <Text style={styles.item}>
                            At {item.key} you have <Text style={{color: 'red'}}> {item.couponvalue} </Text> value coupon{"\n"}
                            by {item.bydate}.
                        </Text>}
                    />
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },item: {
        padding: 8,
        fontSize: 14,
        height: 64,
    }
});
export default MyCouponScreen;