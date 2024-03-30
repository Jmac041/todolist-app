import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Task({ text, onPress, onDelete, isCompleted }) {
  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={onPress}
        style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
      >
        <View style={styles.square}>
          {isCompleted && <Text style={styles.checkmark}>&#10003;</Text>}
        </View>
        <Text
          style={[styles.itemText, isCompleted ? styles.completedText : null]}
        >
          {text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 16,
    width: "100%",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "rgba(141, 223, 218, 0.4)",
    borderRadius: 4,
    marginRight: 16,
  },
  itemText: {
    color: "black",
    fontSize: 17,
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  checkmark: {
    color: "#000",
    fontSize: 15,
  },
  deleteButton: {
    marginLeft: "auto",
    padding: 8,
  },
  deleteButtonText: {
    color: "red",
    fontWeight: "bold",
  },
});
