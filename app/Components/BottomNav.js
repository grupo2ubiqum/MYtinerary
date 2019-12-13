import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import CitiesScreen from './CitiesScreen';
import { Image, View } from 'react-native';
import Hamburguer from "./Hamburguer";
import Profile from "./Profile";
import LoginScreen from './LoginScreen';
import CreateAccountScreen from './CreateAccountScreen';

const TabNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Cities: { screen: CitiesScreen },
    Login: { screen: LoginScreen },
    Profile: { screen: Profile },
    CreateAccount:{ screen: CreateAccountScreen },
  },
{
  bottomNavigationOptions : ({bottomNavigation}) => ({
    footer: (
    <View>
        <TouchableOpacity onPress={() => navigate('Home')}>
            <Image navigation={bottomNavigation} source={require('../assets/img/homeIcon.png')}/>
        </TouchableOpacity>
    </View>
    )
  })
});

export default TabNavigator;