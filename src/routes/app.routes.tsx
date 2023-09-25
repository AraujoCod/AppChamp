import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const {Navigator, Screen} = createBottomTabNavigator();

import { Home } from '../pages/Home'
import { Games } from '../pages/Games'
import { Config } from '../pages/Config'

export function AppRoutes(){
   return(
    <NavigationContainer>
      <Navigator>
         <Screen name="Home" component={Home} />
         <Screen name="Games" component={Games} />
         <Screen name="Config" component={Config} />
      </Navigator>
    </NavigationContainer>
   )
}