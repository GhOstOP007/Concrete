import { SafeAreaView } from "react-native-safe-area-context";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Suggested from "../(foryouslides)/suggested";
import Liked from "../(foryouslides)/liked";
import Library from "../(foryouslides)/library";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const Tab = createMaterialTopTabNavigator();

export default function foryou() {
  const theme = useColorScheme()?? 'light';
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemedView style={{height:150,justifyContent:'center'}}>
      <MaterialIcons style={{textAlign:'center'}} name="account-circle" size={64} color={theme==='light'? 'black' : 'white'} />
        <ThemedText style={{textAlign:'center', fontSize:20,fontWeight:600,padding:10}}>User</ThemedText>
      </ThemedView>
      <Tab.Navigator style={{ flex: 1 }} screenOptions={{
        tabBarActiveTintColor:Colors[theme].tint,
        tabBarStyle:{
          backgroundColor:Colors[theme].background,
        }
      }}>
        <Tab.Screen name="Suggested" component={Suggested} options={{
        }}/>
        <Tab.Screen name="Liked" component={Liked} />
        <Tab.Screen name="Library" component={Library} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
