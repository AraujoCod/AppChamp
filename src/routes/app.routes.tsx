import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons'

const {Navigator, Screen} = createBottomTabNavigator();

import { Home } from '../pages/Home'
import { Games } from '../pages/Games'
import { Sobre } from '../pages/Sobre'
import { AntDesign } from '@expo/vector-icons';

export function AppRoutes(){
   return(

    <NavigationContainer>


      <Navigator screenOptions={{ headerShown: false}}>

         <Screen name="Home" component={Home} options={{
            tabBarIcon: () => {
               return < Feather nome="home" size={25} color='black' />
            }
         }} />
         <Screen name="Games" component={Games} options={{
            tabBarIcon: () => {
               return < Feather nome="airplay" size={9} color='black' />
            }
         }} />
         <Screen name="Sobre a ideia" component={Sobre}
         options={{
            tabBarIcon: () => {
               return < Feather nome="search" size={25} color='black' />
            }
         }} />

      </Navigator>

    </NavigationContainer>

   )
}