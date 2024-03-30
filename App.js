import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
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
    const newTask = { text, isCompleted: false };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    await AsyncStorage.setItem("task-list", JSON.stringify(updatedTasks));
  };

  const toggleTaskCompletion = async (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isCompleted = !updatedTasks[index].isCompleted;

    if (updatedTasks[index].isCompleted) {
      const completedTask = updatedTasks.splice(index, 1)[0];
      updatedTasks.push(completedTask);
    }

    setTasks(updatedTasks);
    await AsyncStorage.setItem("task-list", JSON.stringify(updatedTasks));
  };

  const deleteTask = async (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    await AsyncStorage.setItem("task-list", JSON.stringify(updatedTasks));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <FlatList
          data={tasks}
          renderItem={({ item, index }) => (
            <Task
              text={item.text}
              isCompleted={item.isCompleted}
              onPress={() => toggleTaskCompletion(index)}
              onDelete={() => deleteTask(index)}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
      >
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
    paddingTop: 60,
    paddingHorizontal: 20,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
