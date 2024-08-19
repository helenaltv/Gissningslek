import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [targetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleGuess = () => {
    const numericGuess = parseInt(guess);

    if (isNaN(numericGuess)) {
      setFeedback("Ange ett giltigt nummer.");
      return;
    }

    if (numericGuess < targetNumber) {
      setFeedback("För lågt. Försök igen!");
    } else if (numericGuess > targetNumber) {
      setFeedback("För högt. Försök igen!");
    } else {
      setFeedback("Grattis! Du gissade rätt!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gissningslek</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Ange din gissning"
        value={guess}
        onChangeText={setGuess}
      />
      <TouchableOpacity style={styles.button} onPress={handleGuess}>
        <Text style={styles.buttonText}>Gissa</Text>
      </TouchableOpacity>
      <Text style={styles.feedback}>{feedback}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "80%",
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  feedback: {
    marginTop: 20,
    fontSize: 18,
  },
});
