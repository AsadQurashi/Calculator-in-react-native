import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function App()
{
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(display).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setDisplay('');
      setResult('');
    } else {
      setDisplay(display + value);
    }
  };

  const renderButton = (title) => {
    const isOperator = ['+', '-', '*', '/'].includes(title);
    return (
      <TouchableOpacity
        style={[styles.button, isOperator && styles.operatorButton]}
        onPress={() => handleButtonPress(title)}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.display}>{display}</Text>
        <Text style={styles.result}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonRow}>
          {renderButton('7')}
          {renderButton('8')}
          {renderButton('9')}
          {renderButton('/')}
        </View>
        <View style={styles.buttonRow}>
          {renderButton('4')}
          {renderButton('5')}
          {renderButton('6')}
          {renderButton('*')}
        </View>
        <View style={styles.buttonRow}>
          {renderButton('1')}
          {renderButton('2')}
          {renderButton('3')}
          {renderButton('-')}
        </View>
        <View style={styles.buttonRow}>
          {renderButton('0')}
          {renderButton('C')}
          {renderButton('=')}
          {renderButton('+')}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', 
    alignItems: 'center',
  },
  displayContainer: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  display: {
    fontSize: 32,
  },
  result: {
    fontSize: 48,
  },
  buttonContainer: {
    flexDirection: 'column',
  marginBottom: 20, 
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 78,
    height: 80,
    borderRadius: 40,
    margin: 5,
  },
  operatorButton: {
    backgroundColor: 'rgba(225,0,0,1.0)',
  },
  buttonText: {
    fontSize: 24,
  },
});

