import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screen/HomeScreen";
import NotificationScreen from "../Screen/NotificationScreen";
import ProfileScreen from "../Screen/ProfileScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./DrawerNavigation";
const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home-sharp" : "home-outline";
            }
            if (route.name === "Notification") {
              iconName = focused
                ? "notifications-sharp"
                : "notifications-outline";
            }
            if (route.name === "Profile") {
              iconName = focused ? "person-sharp" : "person-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#308bf6",
          tabBarInactiveTintColor: "#d8d8d8",
        })}
        tabBarOptions={{ labelPosition: "below-icon" }}
      >
        <Tab.Screen
          name="Home"
          options={{ headerShown: false }}
          component={DrawerNavigation}
          style={styles.icon}
        />
        <Tab.Screen
          name="Notification"
          options={{
            headerShown: false,
            tabBarBadge: 3,
            tabBarBadgeStyle: {
              backgroundColor: "#51dd97",
              color: "white",
              fontSize: 10,
              minWidth: 15,
              height: 14,
              marginLeft: -3,
              textAlign: "center",
              lineHeight: "-3",
            },
          }}
          component={NotificationScreen}
          style={styles.icon}
        />
        <Tab.Screen
          name="Profile"
          options={{ headerShown: false }}
          component={ProfileScreen}
          style={styles.icon}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;
const styles = StyleSheet.create({});
