import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../components/Header';
import {CartCard} from '../components/Card';

class Cart extends Component{

    moveToHome = () => {
        this.props.navigation.navigate('Home');
    };

    checkOut = () => {
        Alert.alert(
            "Order Confirmation",
            "Congratulation, \nYour order has been placed successfully. We will delever the items with in Dus Minute.\n\nThanks",
            [
              { text: "OK", onPress: () => (this.props.navigation.navigate('Home')) }
            ],
            { cancelable: false }
          );
    }

    render(){
        const {cartItems = {}} = this.props;
        const headerLeft = (
            <TouchableOpacity onPress = {this.moveToHome}>
                <Icon name="arrow-back" size={25} color="#FFF" />
            </TouchableOpacity>
        );
        const headerCenter = (<Text style = {{color: '#FFF', fontSize: 20}}>Cart</Text>);
        const headerRight = <View />
        return(
            <View>
                <Header 
                    leftComponent = {headerLeft}
                    centerComponent = {headerCenter}
                    rightComponent = {headerRight} />

                <CartCard cartItems = {this.props.cartItems} />

                {Object.keys(cartItems).length ? 
                <TouchableOpacity onPress = {this.checkOut} style = {styles.button}>
                    <Text style = {{textAlign: 'center', fontSize: 20, paddingTop: 5}}>Checkout</Text>
                </TouchableOpacity> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        backgroundColor: '#add8e6',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
        marginHorizontal: 50
    }
})

export default Cart;