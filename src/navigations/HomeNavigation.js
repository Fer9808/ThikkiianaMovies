import React from "react";
import { createStackNavigator, CardStyleInterpolators, HeaderTitle } from "@react-navigation/stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from "@Views/Home";
import Detail from "@Views/Detail";
import { Colors } from "@Config/Constants";

const StackHome = createStackNavigator();

const HomeNavigation = () => {
    return (
      <StackHome.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid
        }}
      >
        <StackHome.Screen 
          name="Home"
          component={ Home }
          options={{
            headerShown: false,
          }}
        />
        <StackHome.Screen 
          name="Detail"
          component={ Detail }
          options={{
            headerBackImage: () => <MaterialCommunityIcons name="arrow-left" size={ 25 } color={ Colors.black } />,
          }}
        />
      </StackHome.Navigator>
    );
}

export default HomeNavigation;