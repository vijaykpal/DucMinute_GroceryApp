import React, {useState, useEffect, useCallback} from 'react';
import {
  ActivityIndicator,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Feather';

import Login from './src/screen/Login';
import Products from './src/screen/Products';
import Cart from './src/screen/Cart';
import Events from './src/screen/Events';
import Orders from './src/screen/Orders';

const Tab = createBottomTabNavigator();

const App = () => {
  const [session, setSession] = useState(false);
  const [cartItems, setCartItems] = useState({});

  const getSession = useCallback(async () => {
    const val = await AsyncStorage.getItem('sessionExist');
    setSession(val);
  })

  useEffect(() => {
    getSession();
  }, []);

  const signIn = () => {
    setSession('true');
};

  const cartCount = (items) => {
    setCartItems(items);
  };
  
  if(session == false){
    return(
      <ActivityIndicator size = {"large"} />
    )
  }
  if(session == null){
    return(
      <Login signIn = {signIn} />
    )
  }
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
            } 
            else if(route.name === 'Events'){
              iconName = 'calendar'
            }
            else if(route.name === 'Orders'){
              iconName = 'shopping-bag'
            }
            else if (route.name === 'Cart') {
              iconName = 'shopping-cart';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          labelStyle: {
            fontSize: 12,
          },
        }}>
        <Tab.Screen name="Home" children = {() => <Products cartCount = {cartCount} />} />
        <Tab.Screen name="Events" component={Events} />
        <Tab.Screen name="Orders" component={Orders} />
        <Tab.Screen name="Cart" options={{ tabBarBadge: Object.keys(cartItems).length ? Object.keys(cartItems).length : null }}>
          {(props) => (<Cart {...props} cartItems = {cartItems} />)}</Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
