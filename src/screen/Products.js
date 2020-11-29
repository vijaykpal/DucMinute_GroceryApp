import React, {Component} from 'react';
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    BackHandler
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import cloneDeep from 'lodash/cloneDeep';

import Header from '../components/Header';
import {productList} from '../dummyData';
import {ProductCard} from '../components/Card';

class Products extends Component{

    constructor(props){
        super(props);
        this.state = {
            selectedItems: {}
        }
    }

    logoutHandler = async () => {
        await AsyncStorage.clear();
        BackHandler.exitApp();
    }

    searchHandler = () => {
        //TODO add searching functionality
    };

    qtyHandler = (id, action, item) => {
        let updatedItem = cloneDeep(this.state.selectedItems);
        let obj = {
            name: item.prod_name,
            price: item.price,
            count: 0
        }
        if(action === 'ADD'){
            if(updatedItem.hasOwnProperty(id)){
                obj.count = updatedItem[id].count + 1
                updatedItem[id] = obj;
            }
            else{
                obj.count = 1;
                updatedItem[id] = obj
            }
        }
        else if(action === 'SUB'){
            if(updatedItem.hasOwnProperty(id) && updatedItem[id].count && updatedItem[id].count > 1){
                obj.count = updatedItem[id].count - 1;
                updatedItem[id] = obj;
            }
            else{
                delete updatedItem[id];
            }
        }
       
        this.setState({selectedItems: updatedItem});
        this.props.cartCount(updatedItem);
    }

    render(){
        const headerLeft = (
            <TouchableOpacity onPress = {this.logoutHandler}>
                <Icon name="power" size={25} color="#FFF" />
            </TouchableOpacity>
        );
        const headerCenter = (<Text style = {{color: '#FFF', fontSize: 20}}>ATTA, FLOURS & SUJI</Text>);
        const headerRight = (
            <TouchableOpacity onPress = {this.searchHandler}>
                <Icon name="search" size={25} color="#FFF" />
            </TouchableOpacity>
            )

        return(
            <View>
                <Header 
                    leftComponent = {headerLeft}
                    centerComponent = {headerCenter}
                    rightComponent = {headerRight} />
                <FlatList 
                    data = {productList}
                    renderItem = {({item, index}) => {
                        return(
                            <ProductCard
                                item = {item}
                                key = {index}
                                qtyHandler = {this.qtyHandler}
                                selectedItems = {this.state.selectedItems} />
                        )
                    }}
                    keyExtractor = {item => item.prod_id.toString()}
                    style = {{marginBottom: 60}} />
            </View>
        );
    }
}

export default Products;