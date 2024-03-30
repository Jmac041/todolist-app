import React, { useState } from "react";
import { StyleSheet, TextInput, View, Button, Keyboard } from "react-native";

export function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  const handleChangeText = (inputText) => {
    setText(inputText);
  };

  const handleAddTask = () => {
    // check if empty
    if (text.trim().length > 0) {
      console.log(`Add button has been pressed with task - ${text}`); // Log the action
      onAddTask(text);
      setText("");
      Keyboard.dismiss(); // dismiss the keyboard
    }
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
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#999",
    marginRight: 10,
    padding: 10,
  },
});
