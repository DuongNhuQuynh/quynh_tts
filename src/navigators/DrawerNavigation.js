import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import HomeScreen from "../Screen/HomeScreen";
import {
  createDrawerNavigator,
  useLegacyImplementation,
} from "@react-navigation/drawer";
import NotificationScreen from "../Screen/NotificationScreen";
import DetailsScreen from "../Screen/DetailsScreen";
import ProfileScreen from "../Screen/ProfileScreen";
const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
      <Drawer.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <Drawer.Screen name="Details" component={DetailsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});
