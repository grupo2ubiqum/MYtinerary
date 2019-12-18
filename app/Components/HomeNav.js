import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import CitiesScreen from './CitiesScreen';
import { Image, View, StatusBar } from 'react-native';
import Hamburguer from "./Hamburguer";
import Profile from "./Profile";
import LoginScreen from './LoginScreen';
import CreateAccountScreen from './CreateAccountScreen';
import ActivityCarousel from './ActivityCarousel';
import User from "./User";
import ItineraryScreen from './ItineraryScreen';
import CityCarousel from './CityCarousel';
import HomeComponent from './HomeComponent'

const AppNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    Cities: { screen: CitiesScreen },
    Login: { screen: LoginScreen },
    Profile: { screen: Profile },
    CreateAccount:{ screen: CreateAccountScreen },
    ActivityCarousel:{ screen: ActivityCarousel },
    Itinerary: {screen: ItineraryScreen},
    CityCarousel: {screen: CityCarousel},
    HomeComponent: {screen: HomeComponent}
 }
,  {
    defaultNavigationOptions : ({navigation}) => ({
    header:     (
        <View >
           
            <View style={{height: StatusBar.currentHeight*2.3, flexDirection:'row' , justifyContent: 'space-between', alignItems: 'flex-end', backgroundColor: '#DB2F00',elevation: 24,shadowOpacity: 0.58,
shadowRadius: 16.00,borderWidth:0.5}}>
                    <Profile navigation={navigation} />        
                    <Hamburguer navigation={navigation} />
            </View>
        </View> )
    })
});

export default AppNavigator;