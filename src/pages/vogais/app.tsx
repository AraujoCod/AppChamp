// QuizScreen.tsx
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Question from './questions';

// QuizScreen.tsx

// ... (seu código anterior)

const QuizScreen: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      questionText: '1. Qual letra esse sinal representa?',
      options: ['A', 'E', 'I', 'O','U'],
      correctAnswer: 'A',
      imageSource: require('./letras/A.png'), // Import the image
      
    },
    {
      questionText: '2. Qual letra esse sinal representa?',
      options: ['A', 'E', 'I', 'O','U'],
      correctAnswer: 'I',
      imageSource: require('./letras/I.png'), // Import the image
    },
    {
      questionText: '3. Qual letra esse sinal representa?',
      options: ['A', 'E', 'I', 'O','U'],
      correctAnswer: 'U',
      imageSource: require('./letras/U.png'), // Import the image
    },
    {
      questionText: '4. Qual letra esse sinal representa?',
      options: ['A', 'E', 'I', 'O','U'],
      correctAnswer: 'E',
      imageSource: require('./letras/E.png'), // Import the image
    },
    {
      questionText: '5. Qual letra esse sinal representa?',
      options: ['A', 'E', 'I', 'O','U'],
      correctAnswer: 'O',
      imageSource: require('./letras/O.png'), // Import the image
    },
    // Adicione mais perguntas aqui
  ];

  const handleAnswer = (selectedOption: string) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    // Avance para a próxima pergunta
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0); // Reinicia a pontuação para 0
  };

  return (
    <View style={{ backgroundColor: 'whitesmoke' }}>
      {currentQuestion < questions.length ? (
        <Question
          questionText={questions[currentQuestion].questionText}
          options={questions[currentQuestion].options}
          imageSource={questions[currentQuestion].imageSource}
          onPress={handleAnswer}
        />
      ) : (
        <View>
          <Text>Pontuação final: {score}</Text>
          <Button title="Reiniciar" onPress={handleRestart} />
        </View>
      )}
    </View>
  );
};

export default QuizScreen;