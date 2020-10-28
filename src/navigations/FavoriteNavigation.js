import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Favorite from "@Views/Favorite";
import Detail from "@Views/Detail";
import { Colors } from "@Config/Constants";

const StackFavorite = createStackNavigator();

const FavoriteNavigation = () => {
    return (
      <StackFavorite.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid
        }}
      >
        <StackFavorite.Screen 
          name="Favorite"
          component={ Favorite }
          options={{
            headerShown: false,
          }}
        />
        <StackFavorite.Screen 
          name="Detail"
          component={ Detail }
          options={{
            headerBackImage: () => <MaterialCommunityIcons name="arrow-left" size={ 25 } color={ Colors.black } />,
          }}
        />
      </StackFavorite.Navigator>
    );
}

export default FavoriteNavigation;