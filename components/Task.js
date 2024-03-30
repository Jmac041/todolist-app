import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function Task({ text }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemIcon} />
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginTop: 10,
    flexDirection: "row", // To align items horizontally
    alignItems: "center",
    padding: 16,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 16, // To create a gap between items
    width: "100%",
  },
  itemIcon: {
    width: 24,
    height: 24,
    backgroundColor: "rgba(141, 223, 218, 0.4)",
    borderRadius: 4,
    marginRight: 16,
  },
  itemText: {
    color: "black",
    fontSize: 17,
    lineHeight: 22,
  },
});
