import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="accountInfo" options={{headerShown:true, headerTitle:"Account", headerBackTitle:"Back"}} />
      </Stack>
    </GestureHandlerRootView>
  );
}
