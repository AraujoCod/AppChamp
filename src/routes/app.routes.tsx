import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const {Navigator, Screen} = createBottomTabNavigator();

import { Home } from '../pages/Home'
import { Games } from '../pages/Games'
import { Sobre } from '../pages/Sobre'

export function AppRoutes(){
   return(

    <NavigationContainer>

      <Navigator>

         <Screen name="Home" component={Home} />
         <Screen name="Games" component={Games} />
         <Screen name="Sobre a ideia" component={Sobre} />

      </Navigator>

    </NavigationContainer>

   )
}