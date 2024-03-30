import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Keyboard } from "react-native"; // Import Keyboard

export function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  const handleChangeText = (inputText) => {
    setText(inputText);
  };

  const handleAddTask = () => {
    console.log(`Add button has been pressed with task - ${text}`); // Log the action
    onAddTask(text);
    setText("");
    Keyboard.dismiss(); // Dismiss the keyboard
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add new task"
        value={text}
        onChangeText={handleChangeText}
      />
      <Button title="Add" onPress={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    marginRight: 10,
    padding: 10,
  },
});
