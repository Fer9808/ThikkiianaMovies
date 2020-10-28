import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FlashMessage from "react-native-flash-message";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeNavigation from "./HomeNavigation";
import SearchNavigation from "./SearchNavigation";
import FavoriteNavigation from "./FavoriteNavigation";

const BottomTabApplication = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <NavigationContainer>
            <BottomTabApplication.Navigator
                initialRouteName='Home'
                backBehavior={'none'}
            >
                <BottomTabApplication.Screen 
                    name='Home' 
                    component={ HomeNavigation }
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" size={ size } color={ color } />),
                    }}
                />
                <BottomTabApplication.Screen 
                    name='Favorite' 
                    component={ FavoriteNavigation } 
                    options={{
                        tabBarLabel: 'Favorite',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="heart" size={ size } color={ color } />),
                    }} 
                />
                <BottomTabApplication.Screen 
                    name='Search' 
                    component={ SearchNavigation } 
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="magnify" size={ size } color={ color } />),
                    }}
                />
            </BottomTabApplication.Navigator>
            <FlashMessage position="bottom" />
        </NavigationContainer>
    );
}

export default BottomNavigation