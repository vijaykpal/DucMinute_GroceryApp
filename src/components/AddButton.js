import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export const AddButton = (props) => {
    const {qtyHandler} = props;
    return(
        <TouchableOpacity style = {styles.addContainer} onPress = {qtyHandler}>
            <Text style = {{fontSize: 16, color: '#FFF'}}>ADD</Text>
        </TouchableOpacity>
    );
}

export const ButtonWithQuantity = (props) => {
    const {count = 0, id, qtyHandler, item} = props;
    return(
        <View style = {styles.qtyContainer}>
            <TouchableOpacity onPress = {() => {qtyHandler(id, 'SUB', item)}}>
                <Text style = {[styles.addRemoveBtn, {borderRightWidth: 1, borderRightColor: '#43E5CB'}]}>-</Text>
            </TouchableOpacity>
            <Text style = {{width: 30, textAlign: 'center', textAlignVertical: 'center'}}>{count}</Text>
            <TouchableOpacity onPress = {() => {qtyHandler(id, 'ADD', item)}}>
                <Text style = {[styles.addRemoveBtn, {borderLeftWidth: 1, borderLeftColor: '#43E5CB'}]}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    addContainer: {
        height: 35,
        width: 100,
        backgroundColor: '#43E5CB',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    qtyContainer: {
        height: 35,
        width: 100,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#43E5CB',
        flexDirection: 'row'
    },
    addRemoveBtn: {
        fontSize: 16, 
        color: '#000', 
        width: 35, 
        height: '100%', 
        textAlign: 'center', 
        textAlignVertical: 'center'
    }
})

//export default AddButton;