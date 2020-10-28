import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Search from "@Views/Search";
import Detail from "@Views/Detail";
import { Colors } from "@Config/Constants";

const StackSearch = createStackNavigator();

const SearchNavigation = () => {
    return (
      <StackSearch.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid
        }}
      >
        <StackSearch.Screen 
          name="Search"
          component={ Search }
          options={{
            headerShown: false,
          }}
        />
        <StackSearch.Screen 
          name="Detail"
          component={ Detail }
          options={{
            headerBackImage: () => <MaterialCommunityIcons name="arrow-left" size={ 25 } color={ Colors.black } />,
          }}
        />
      </StackSearch.Navigator>
    );
}

export default SearchNavigation;