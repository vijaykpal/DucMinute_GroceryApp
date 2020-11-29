import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import {AddButton, ButtonWithQuantity} from './AddButton';

export const ProductCard = (props) => {
    const {item, qtyHandler, selectedItems} = props;
    return(
        <View style = {styles.container}>
            <View style = {{width: '35%'}}>
                <Image source = {item.img} style = {{height: 130, width: 70}} resizeMode = 'cover' />
            </View>
            <View style = {{width: '65%'}}>
                <View style = {{height: '70%'}}>
                    <Text style = {{fontSize: 16, fontWeight: '600', paddingBottom: 5}}>{item.prod_name}</Text>
                    <Text style = {{fontSize: 14, fontWeight: 'bold', paddingBottom: 5}}>{item.prod_brand}</Text>
                    <Text style = {{fontSize: 14, paddingBottom: 5, color: 'gray'}}>{item.quantity}</Text>
                </View>
            
                <View style = {styles.priceBtn}>
                    <Text style = {{fontSize: 14, paddingBottom: 5, color: 'gray'}}>{item.price}</Text>
                    {selectedItems.hasOwnProperty(item.prod_id) ? 
                        <ButtonWithQuantity 
                            count = {selectedItems[item.prod_id].count} 
                            id = {item.prod_id} 
                            item = {item}
                            qtyHandler = {qtyHandler} /> : 
                        <AddButton 
                            qtyHandler = {() => qtyHandler(item.prod_id, 'ADD', item)} />}
                    
                </View>
            </View>
        </View>
    );
}

export const CartCard = (props) => {
    const {cartItems} = props,
    selectedKeys = Object.keys(cartItems);
    let total = 0;
    if(!selectedKeys.length){
        return <Text style = {{fontSize: 20, fontWeight: '900', textAlign: 'center'}}>{'No item added in cart \n please add few'}</Text>
    }
    return(
        <View style = {[styles.container, {flexDirection: 'column', height:'auto'}]}>
            {selectedKeys.map((item, index) => {
                total = total + cartItems[item].price * cartItems[item].count
                return(
                    <View style = {{marginVertical: 10, marginHorizontal: 10}} key = {index}>
                        <Text style = {{fontSize: 18}}>{cartItems[item].name}</Text>
                        <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style = {{fontWeight: 'bold'}}>Quantity  {cartItems[item].count}</Text>
                            <Text style = {{fontWeight: 'bold'}}>Rs  {cartItems[item].price}</Text>
                            <Text style = {{fontWeight: 'bold'}}>Total  {cartItems[item].price * cartItems[item].count}</Text>
                        </View>
                    </View>
                )
            })} 
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, marginHorizontal: 10}}>
                <Text style = {{fontWeight:'bold', fontSize: 20}}>Total Sum </Text>
                <Text style = {{fontWeight:'bold', fontSize: 20}}>{total}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 160,
        borderWidth: 0.5,
        borderColor: 'gray',
        margin: 10,
        borderRadius: 2,
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: 'gray',
        shadowOpacity: 0.8,
        shadowRadius: 5,
        elevation: 5,
        flexDirection: 'row'
    },
    prodDetails: {
        width: '65%',
        paddingVertical: 10
    },
    priceBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})