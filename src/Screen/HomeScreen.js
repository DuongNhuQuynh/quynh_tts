import { StyleSheet, Text, View,ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import BottomNavigation from "../navigators/BottomNavigation";
const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Header navigation={navigation} />
      <Content  />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#f5f6f8"
  }
});
