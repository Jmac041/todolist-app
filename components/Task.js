import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Task({ text, onPress, isCompleted }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <View style={styles.square}>
        {isCompleted && <Text style={styles.checkmark}>&#10003;</Text>}
      </View>
      <Text
        style={[styles.itemText, isCompleted ? styles.completedText : null]}
      >
        {text}
      </Text>
    </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
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
});
