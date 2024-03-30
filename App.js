import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Task } from "./components/Task";
import { AddTask } from "./components/AddTask";

export default function App() {
  const [tasks, setTasks] = useState([
    "Take out the trash",
    "Walk the dog",
    "Review a pull request",
    "Buy a lamp for the bedroom",
  ]);

  const handleAddTask = (task) => {
    setTasks((currentTasks) => [...currentTasks, task]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Today's Tasks</Text>
          <ScrollView style={styles.items}>
            {tasks.map((task, index) => (
              <Task key={index} text={task} />
            ))}
          </ScrollView>
        </View>
        <AddTask onAddTask={handleAddTask} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  tasksWrapper: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    shadowRadius: 14,
    shadowOpacity: 0.1,
    shadowColor: "black",
  },
  sectionTitle: {
    fontSize: 35,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
});
