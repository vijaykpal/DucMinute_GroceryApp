import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Orders = () => {
    return(
        <View style = {styles.container}>
            <Text style = {{fontSize: 20, color: '#3a82bd'}}>Orders</Text>
            <Text style = {{fontSize: 20}}>Comming Soon...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default Orders;