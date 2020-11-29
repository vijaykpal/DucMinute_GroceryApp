import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {validateMobileNumber} from '../utils';

const Login = (props) => {

    const [mobileNum, setMobileNum] = useState('');
    const [error, setError] = useState(false);

    const loginHandler = () => {
        if(error)
            setError(false);

        if(validateMobileNumber(mobileNum)){ 
            AsyncStorage.setItem('sessionExist', 'true')
            props.signIn();
        }
        else{
            setError(true)
        }
    };

    return(
        <View style = {styles.container}>
            <Text style = {styles.label}>Sign In</Text>
            <TextInput
                value = {mobileNum} 
                onChangeText = {(text) => {setMobileNum(text), setError(false)}}
                placeholder = {'Enter your mobile number'}
                keyboardType = 'numeric'
                autoFocus = {true}
                style = {styles.mobileInput} />

            {error ? <Text style = {{fontSize: 16, color: 'red', marginVertical: 5}}>please Enter a valid number..!!</Text>: null}

            <TouchableOpacity onPress = {loginHandler} style = {styles.button}>
                <Text style = {{textAlign: 'center', fontSize: 20, paddingTop: 5}}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3a82bd',
    },
    mobileInput: {
        width: '70%',
        borderWidth: 1,
        borderRadius: 5,
        margin: 5
    },
    button: {
        width: '50%',
        height: 40,
        backgroundColor: '#add8e6',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10
    }
});

export default Login;