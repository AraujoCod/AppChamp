import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

interface QuestionProps {
  questionText: string;
  options: string[];
  imageSource: number;
  onPress: (selectedOption: string) => void;
}

const Question: React.FC<QuestionProps> = ({
  questionText,
  options,
  imageSource,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.questionText}>{questionText}</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() => onPress(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius:40,
  },
  questionText: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Georgia, serif',
   
  },
  option: {
    backgroundColor: '#ffefd5',
    padding: 10,
    margin: 5,
    width:150,
    resizeMode:'contain',
    borderRadius:40,

    
    
   
    

    
  },
  optionText: {
    fontSize: 16,
    color:'#fffff',
    textAlign: 'center',
    fontFamily: 'Georgia, serif'
  },
  
});

export default Question;