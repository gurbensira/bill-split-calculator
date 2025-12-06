import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
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

    setResult({
      totalBill: totalBill.toFixed(2),
      perPerson: perPerson.toFixed(2)
    });
  };

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

        <Button title="Calculate" onPress={calculateSplit} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 20,
  },
  box: {
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    width: '100%',
    borderRadius: 5,
  },
  resultBox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    height: '20%',
    width: '60%',
    borderRadius: 5
  },
  result: {
    padding: 15,
    borderRadius: 5,
  },
});
