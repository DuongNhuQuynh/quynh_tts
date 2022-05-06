import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigation from "./BottomNavigation";
import NotificationScreen from "../Screen/NotificationScreen";
import ProfileScreen from "../Screen/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../Screen/HomeScreen";
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My home",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerShown: false,
          }}
        />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Home;
