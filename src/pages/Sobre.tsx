import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image, } from 'react-native'


export function Sobre() {
    return(

        <ScrollView style={{ flex: 1, backgroundColor:'#FDF5E6'}}>

        <Text style={styles.titulo} >
                Um pouco sobre a ideia
            </Text>

    <Text style={styles.justificativa}>
            A dificuldade em oferecer brinquedos inclusivos para crianças com deficiência auditiva é desafiador. 
            Muitos dos brinquedos disponíveis no mercado são desenvolvidos sem levar em conta suas necessidades específicas, e o ponto principal de um brinquedo, “ser divertido”.
            A ausência de recursos adaptados, como elementos visuais, sinais ou vibrações, para compensar a falta de audição, limita a experiência lúdica e a participação dessas crianças. Além disso,
            a conscientização sobre a importância da acessibilidade e da inclusão em produtos infantis ainda é insuficiente, resultando em uma oferta limitada de brinquedos que atendam 
            adequadamente a esse público. 
    </Text>

    <Text style={styles.objetivo} >
            O objetivo do projeto é criar um brinquedo inclusivo inovador para crianças com deficiência auditiva, utilizando tecnologia de impressão 3D e materiais sustentáveis, 
            como o plástico reciclado ABS e o PLA biodegradável, através do desenvolvimento de um robô interativo, acompanhado por um aplicativo, que promova a inclusão social e estimule o 
            desenvolvimento cognitivo e social pleno dessas crianças.
     </Text>

    <Text style={styles.desenvolvimento} >
            O projeto contou com a consultoria de especialistas em inclusão, cujas contribuições contribuíram para que o Champ apresentasse uma abordagem inclusiva, 
            permitindo que o robô seja interativo tanto com crianças com deficiência auditiva quanto com crianças sem essa condição. Nesse sentido, o robô tem a possibilidade de emitir sons,
             que podem ser ativados ou desativados conforme a preferência da criança ou suas necessidades específicas. O desenvolvimento do projeto envolve a etapa de design do robô, 
             a criação de um protótipo impresso em 3D utilizando polímeros reciclados de ABS e PLA, onde a parte de modelagem do robô é feita nos programas Autodesk Fusion 360 e Tinkercad,
              além da programação do aplicativo para dispositivos móveis. 
    </Text>

            <Text style={styles.titulo2}>
                ----Formação da equipe----
            </Text>

<Text style={styles.formacaoep}>
        Dayane Gonzaga Domingos  ( Orientadora / Líder / Professora )
            {'\n'}
            {'\n'}
        Luana Brunetti de Oliveira  ( Designer / Pitty )
            {'\n'}
            {'\n'}
        Gerônimo de Araujo Franco ( Desenvolvedor )
            {'\n'}
            {'\n'}
        Pedro Felipe Borges ( Desenvolvedor / Modelagem )
            {'\n'}
            {'\n'}
        Pedro Gabriel Santos de Moraes ( Desenvolvedor / Modelagem )
            {'\n'}
            {'\n'}
        Marco Antonio ( Designer / Pitty ) 
            {'\n'}
            {'\n'}
    
 </Text>

  <Image
        style={styles.logosenaipng}
        source={require('./img/senai.png')}
      />

      </ScrollView>
      
      )
}

const styles = StyleSheet.create({
    
    titulo: {
        textAlign: 'center', 
        fontSize: 25, 
        fontWeight: '600', 
        marginTop: 22,
    }, 

    justificativa:{
        marginTop: 40,
        width: 250,
        marginLeft: 60,
        fontSize: 14
    }, 

    objetivo:{

        marginTop: 40,
        width: 250,
        marginLeft: 60,
        fontSize: 14

    },

    desenvolvimento:{

        marginTop: 40,
        width: 250,
        marginLeft: 60,
        fontSize: 14

    },

    titulo2:{

        textAlign: 'center', 
        fontSize: 25, 
        fontWeight: '600', 
        marginTop: 40,

    }, 

    formacaoep:{

        marginTop: 40,
        width: 300,
        marginLeft: 60,
        fontSize: 14,
        fontWeight: '600',

    },

    logosenaipng:{
        marginLeft: 50,
        resizeMode : 'contain',
        width: 300,

    }


})