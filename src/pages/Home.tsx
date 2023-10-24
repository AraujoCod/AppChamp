import React from 'react'
import {ImageBackground, StyleSheet, Text, View,TouchableOpacity,Image,TouchableHighlight} from 'react-native'


export function Home(){
    return(
        <View style={{ flex: 1, backgroundColor:'#FFFF'}}>
            
          <ImageBackground source={require ('./img/ChampRbp.png')} resizeMode="contain" style={styles.ChampRbp}></ImageBackground>

          <ImageBackground source={require ('./img/ChampFr.png')} resizeMode="contain" style={styles.ChampFr}> </ImageBackground>
   
          <Text style={styles.BemVindo}>Bem Vindo!</Text>

          <Text style={styles.AtvSom}>Ative / Desative o som </Text>

          <TouchableOpacity >  <Image style={styles.icone} source={require('./img/icone.png')} /></TouchableOpacity>

        </View>
   )
 }

const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#fffff"

        },

        ChampRbp: {

            width: 150,
            height: 200,
            resizeMode:"contain",
            marginLeft: 100,
            top: 155,

          },

        ChampFr: {
           flex: 1, 
           width: 400,
           height: 100,
           top: 120,
         
        },

        BemVindo: {
            top: 70,
            fontWeight: 600,
            fontSize: 28,
            color: '#004AAD',
            textAlign: 'center',
            flex: 1,
            fontFamily: 'Georgia, serif ',
            
    
        },

        icone: {

          bottom: 50,
          width: 50,
          height:50,
          resizeMode:"contain",
          marginLeft: 20,
      
        },

        AtvSom: {
        top: 145,   
        fontWeight: 600,
        fontSize: 20,
        color: '#004AAD',
        textAlign: 'center',
        flex: 1,
        fontFamily: 'Georgia, serif',
        marginLeft: 35,    
    },

      

        

});  
 