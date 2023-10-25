import React from 'react'
import {  StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'


export function Games() {
    return(

        <View style={{ flex: 1, backgroundColor:'#FFFF'}}>
    
          <TouchableOpacity >   <Image style={styles.ABC}   source={require('./img/ABC.png')} />   </TouchableOpacity>
          <br>
        </br>
          <TouchableOpacity >   <Image style={styles.BolaFut}   source={require('./img/BolaFut.png')} />   </TouchableOpacity>
          <br>
        </br>
          <TouchableOpacity >   <Image style={styles.BolaPraia}   source={require('./img/BolaPraia.png')} />   </TouchableOpacity>
          <br>
        </br>
          <TouchableOpacity >   <Image style={styles.Mapa}   source={require('./img/Mapa.png')} />   </TouchableOpacity>
          <br>
        </br>
          <TouchableOpacity >   <Image style={styles.Sorvete}   source={require('./img/Sorvete.png')} />   </TouchableOpacity>
          <br>
        </br>
          <TouchableOpacity >   <Image style={styles.Elefante}   source={require('./img/Elefante.png')} />   </TouchableOpacity>
        
          <Image style={styles.senai}   source={require('./img/senai.png')} /> 
    
          
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '40',
            
      },
    
      ABC:{
    
        width: 142,
        height: 142,
        left: 75,
        top:-142,
      },
    
      BolaFut:{
        width: 140,
        height: 140,
        right: 75,
        alignItems: 'center',
        justifyContent: 'center',
        top: -300,
      },
    
      BolaPraia:{
        
        
        width: 138,
        height: 138,
        right:75,
        alignItems: 'center',
        justifyContent: 'center',
        top:-280,
    
      },
    
      Mapa:{
    
        width: 143,
        height: 143,
        left: 75,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 440,
        
      },
    
      Sorvete:{
    
        width: 143,
        height: 143,
        right:75,
        alignItems: 'center',
        justifyContent: 'center',
        bottom:420,
    
      },
    
      Elefante:{
        
        width: 140,
        height: 140,
        left: 75,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 580,
    
      },
      
    
      senai:{
    
    width:370,
    height:370,
    bottom:600,
    resizeMode:'contain',
    
      },
});