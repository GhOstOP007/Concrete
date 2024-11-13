import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Suggested from "../(foryouslides)/suggested";
import Liked from "../(foryouslides)/liked";
import Library from "../(foryouslides)/library";

const Tab = createMaterialTopTabNavigator();

export default function foryou() {
  return (
      <Tab.Navigator>
      <Tab.Screen name="Suggested" component={Suggested} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
  );
}

