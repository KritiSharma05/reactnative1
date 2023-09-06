import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const App = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  // Function to perform the calculation
  const calculate = (operator: string) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Invalid input');
      return;
    }

    switch (operator) {
      case '+':
        setResult((n1 + n2).toString());
        break;
      case '-':
        setResult((n1 - n2).toString());
        break;
      case '*':
        setResult((n1 * n2).toString());
        break;
      case '/':
        if (n2 === 0) {
          setResult('Division by zero');
        } else {
          setResult((n1 / n2).toString());
        }
        break;
      default:
        setResult('Invalid operator');
        break;
    }
  };

  const resetValues = () => {
    setNum1('');
    setNum2('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Simple Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter number 1"
        onChangeText={(text) => setNum1(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter number 2"
        onChangeText={(text) => setNum2(text)}
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
        <Button  title="Add (+)" onPress={() => calculate('+')} />
        <Button title="Subtract (-)" onPress={() => calculate('-')} />
        <Button title="Multiply (*)" onPress={() => calculate('*')} />
        <Button title="Divide (/)" onPress={() => calculate('/')} />
      </View>
      <Text style={styles.result}>Result: {result}</Text>
      
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Background color
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection:'column', // Change to 'row' to display buttons horizontally
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    width: 200,
    marginBottom: 20,
    marginLeft:100
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button:{

  }
});
