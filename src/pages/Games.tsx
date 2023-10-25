import React from 'react'
import {  StyleSheet, View, Image, TouchableOpacity } from 'react-native'


export function Games() {
    return(

        <View style={{ flex: 1, backgroundColor:'#FFFF'}}>
    
          <TouchableOpacity ><Image style={styles.ABC}   source={require('./img/ABC.png')} /></TouchableOpacity>
        
          <TouchableOpacity ><Image style={styles.BolaFut}   source={require('./img/BolaFut.png')} /></TouchableOpacity>
      
          <TouchableOpacity ><Image style={styles.BolaPraia}   source={require('./img/BolaPraia.png')} /></TouchableOpacity>
     
          <TouchableOpacity ><Image style={styles.Mapa}   source={require('./img/Mapa.png')} /></TouchableOpacity>
    
          <TouchableOpacity ><Image style={styles.Sorvete}   source={require('./img/Sorvete.png')} /></TouchableOpacity>
       
          <TouchableOpacity ><Image style={styles.Elefante}   source={require('./img/Elefante.png')} /></TouchableOpacity>
        
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
    
        width: 138,
        height: 138,
        left: 225,
        top: 80,
      },
    
      BolaFut:{
        width: 138,
        height: 138,
        alignItems: 'center',
        justifyContent: 'center',
        left: 30,
        bottom: 61,
      },
    
      BolaPraia:{
        left: 29,
        width: 138,
        height: 138,
        alignItems: 'center',
        justifyContent: 'center',
        top: 10,
        
    
      },
    
      Mapa:{
        width: 138,
        height: 138,
        left: 230,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 130,
        
      },
    
      Sorvete:{
    
        width: 138,
        height: 138,
        left: 30,
        alignItems: 'center',
        justifyContent: 'center',
        bottom:50,
    
      },
    
      Elefante:{
        
        width: 138,
        height: 138,
        left: 230,
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 188,
    
      },
      
    
      senai:{

        left: 78,
        width:250,
        height:200,
        bottom: 200,
        resizeMode:'contain',
    
      },
});