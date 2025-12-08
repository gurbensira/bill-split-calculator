import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, Pressable } from 'react-native';
import { styles } from './App.styles';
import { useState } from 'react';

export default function App() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [numPeople, setNumPeople] = useState('');
  const [result, setResult] = useState(null);

  const calculateSplit = () => {
    const bill = parseFloat(billAmount);
    const tip = parseFloat(tipPercentage);
    const people = parseInt(numPeople);

    const decimalTipPercentage = tip / 100;
    const tipAmount = bill * decimalTipPercentage;
    const totalBill = bill + tipAmount;
    const perPerson = totalBill / people;

    if (!billAmount || !tipPercentage || !numPeople) {
      alert('Please fill in all fields');
      return;
    };

    setResult({
      totalBill: totalBill.toFixed(2),
      perPerson: perPerson.toFixed(2)
    });
  };

  const resetInputs = () => {
    setBillAmount('')
    setTipPercentage('')
    setNumPeople('')
    setResult(null)
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Bill Split Calculator</Text>

        <TextInput
          style={styles.input}
          placeholder="Bill Amount"
          keyboardType="numeric"
          value={billAmount}
          onChangeText={setBillAmount}
        />

        <TextInput
          style={styles.input}
          placeholder="Tip Percentage"
          keyboardType="numeric"
          value={tipPercentage}
          onChangeText={setTipPercentage}
        />

        <TextInput
          style={styles.input}
          placeholder="Number of People"
          keyboardType="numeric"
          value={numPeople}
          onChangeText={setNumPeople}
        />
        <View
          style={styles.buttonBox}>
          <Pressable style={styles.calculateButton} onPress={calculateSplit}>
            <Text style={styles.calculateButtonText}>Calculate</Text>
          </Pressable>

          <Pressable style={styles.resetButton} onPress={resetInputs}>
            <Text style={styles.resetButtonText}>Reset</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.resultBox}>
        {result && (
          <View style={styles.result}>
            <Text>Total Bill: ₪{result.totalBill}</Text>
            <Text>Per Person: ₪{result.perPerson}</Text>
          </View>
        )}
      </View>


      <StatusBar style="auto" />
    </View>
  );
}


