import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const Header = (props) => {
    const {leftComponent, centerComponent, rightComponent = null} = props;
    return(
        <View style = {styles.container}>
            {leftComponent}
            {centerComponent}
            {rightComponent}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#43E5CB',
        paddingHorizontal: 5
    }
})

export default Header;