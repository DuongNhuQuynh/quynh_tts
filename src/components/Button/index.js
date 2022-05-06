import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function Buttons({ text, onPress ,width,backgroundColor}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ width: width, backgroundColor: backgroundColor }}
    >
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 7,
    paddingVertical: 7,
    backgroundImage:
      "linear-gradient(140deg, rgba(121,241,118,1) 0%, rgba(53,177,183,1) 100%)",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
