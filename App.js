import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
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
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem("task-list");
        if (storedTasks !== null) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadTasks();
  }, []);

  const handleAddTask = async (text) => {
    const updatedTasks = [...tasks, { text, isCompleted: false }];
    setTasks(updatedTasks);
    await AsyncStorage.setItem("task-list", JSON.stringify(updatedTasks));
  };

  const toggleTaskCompletion = async (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;
    setTasks(updatedTasks);
    await AsyncStorage.setItem("task-list", JSON.stringify(updatedTasks));
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
              <Task
                key={index}
                text={task.text}
                isCompleted={task.isCompleted}
                onPress={() => toggleTaskCompletion(index)}
              />
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
