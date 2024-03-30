import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
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
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <ScrollView style={styles.items}>
          {tasks.map((task, index) => (
            <Task key={index} text={task} />
          ))}
        </ScrollView>
      </View>
      <View style={styles.addTaskWrapper}>
        <AddTask onAddTask={handleAddTask} />
      </View>
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
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  addTaskWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    borderTopWidth: 1,

    borderColor: "#cccccc",
    backgroundColor: "white",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 50,
  },
});
